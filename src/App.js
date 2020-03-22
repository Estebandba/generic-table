import React, { Component } from "react";
import "./App.css";
import Table from "./table-component/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      headerFields: [],
      hasLoaded: false,
      loading: true
    };
  }

  componentDidMount() {
    const url =
      "https://randomuser.me/api/?results=100&inc=name,dob,email,cell,location,picture&noinfo";
    fetch(url, { headers: { "Set-Cookie": "HttpOnly;Secure;SameSite=Strict" } })
      .then(this.handleError)
      .then(res => res.json())
      .then(res => this.manipulateData(res.results))
      .catch(error => {
        this.setState({ loading: false, error });
        return console.log(error);
      });
  }

  handleError = res => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res;
  };

  manipulateData = data => {
    const headerFields = Object.keys(data[0]).map(
      field => field[0].toUpperCase() + field.slice(1)
    );

    const modifiedData = data.map((elem, i) => {
      return {
        ...elem,
        name: `${elem.name.first} ${elem.name.last}`,
        location: `${elem.location.city}, ${elem.location.country}`,
        dob: Intl.DateTimeFormat("lt-LT").format(new Date(elem.dob.date)),
        picture: elem.picture.medium
      };
    });

    this.setState({
      data: modifiedData,
      headerFields: headerFields,
      hasLoaded: true,
      loading: false
    });
  };

  render() {
    return (
      <div className="App" data-test="component-app">
        {this.state.hasLoaded ? (
          <Table
            data={this.state.data}
            headerFields={this.state.headerFields}
            maxHeight={"700px"}
            maxWidth={"1500px"}
          />
        ) : this.state.loading ? (
          <div className="loader"></div>
        ) : (
          <div className="error">
            {this.state.error ? "Network error" : this.state.error.statusText}
          </div>
        )}
      </div>
    );
  }
}
export default App;
