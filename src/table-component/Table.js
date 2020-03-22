import React, { Component } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import PropTypes from "prop-types";
import orderDataBy from "./utils/orderDataBy";
import "./styles/Table.css";

/* 
  TableComponent is the main state-based component 
  that manage the users' actions and renders its children 
  TableHeader and TableBody.
*/

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      isAsc: null,
      sortedColumn: "",
      loading: false,
      tableDataRemaining: this.props.data,
      prevY: 0,
      arrow: ""
    };
  }

  componentDidMount() {
    this.loadMoreData();
    this.createObserver();
  }

  createObserver = () => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };
    this.observer = new IntersectionObserver(this.handleObserver, options);
    this.observer.observe(document.querySelector("#observe"));
  };

  handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      this.loadMoreData();
    }
    this.setState({ prevY: y });
  };

  loadMoreData = () => {
    this.setState(state => ({ loading: !state.loading }));

    const filteredData = () => {
      return this.state.tableDataRemaining.splice(0, 10);
    };

    this.setState((state, props) => ({
      tableData: [...state.tableData, ...filteredData()],
      tableDataRemaining: state.tableDataRemaining,
      loading: !state.loading,
      isAsc: null,
      arrow: state.tableDataRemaining.length === 0 ? state.arrow : ""
    }));
  };

  sortColumns = e => {
    const { isAsc, sortedColumn } = this.state;

    const columnSelected = e.target.id;

    const [ascendent, descendent] = ["asc", "desc"];

    const orderBy = orderType =>
      orderDataBy(orderType, this.state.tableData, columnSelected);

    let sortColumn;
    if (columnSelected === sortedColumn) {
      sortColumn = isAsc ? orderBy(descendent) : orderBy(ascendent);
    } else {
      this.setState({ isAsc: null });
      sortColumn = orderBy(ascendent);
    }

    this.setState(state => ({
      tableData: sortColumn,
      sortedColumn: columnSelected,
      isAsc: !state.isAsc,
      arrow: !state.isAsc ? "↑" : "↓"
    }));
  };

  render() {
    return (
      <div
        className="table-container"
        style={{
          maxHeight: this.props.maxHeight ? `${this.props.maxHeight}` : "700px",
          maxWidth: this.props.maxWidth ? `${this.props.maxWidth}` : "100%"
        }}
        data-test="component-table"
      >
        <table className="table-main">
          <TableHeader
            headerFields={this.props.headerFields}
            sortedColumn={this.state.sortedColumn}
            arrow={this.state.arrow}
            sortColumns={this.sortColumns}
          />
          <TableBody
            tableData={this.state.tableData}
            headerFields={this.props.headerFields}
            loading={this.state.loading}
          />
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  headerFields: PropTypes.array.isRequired,
  maxHeight: PropTypes.string
};

export default Table;
