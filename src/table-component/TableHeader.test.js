import React from "react";
import { shallow } from "enzyme";
import TableHeader from "./TableHeader";
import ColumnResizer from "react-column-resizer";
import { findByTestAttr } from "../../test/testUtils";

const setup = (props = {}) => {
  let wrapper = shallow(<TableHeader {...props} />);
  return wrapper;
};

const headerFields = ["Name", "Picture"];
const sortedColumn = "";
let arrow = "";

describe("Check <TableHeader/>", () => {
  it("should render the Table component without errors", () => {
    const props = {
      headerFields: [],
      sortedColumn: "",
      arrow: "",
      sortColumns: () => {}
    };
    const wrapper = setup(props);
    const tableHeaderComponent = findByTestAttr(
      wrapper,
      "table-header-component"
    );
    expect(tableHeaderComponent.length).toBe(1);
  });

  it("should render the ColumnResizer component without errors", () => {
    const props = {
      headerFields,
      sortedColumn,
      arrow,
      sortColumns: () => {}
    };
    const wrapper = setup(props);
    const columnResizerComponent = wrapper.find(ColumnResizer);
    expect(columnResizerComponent).toHaveLength(1);
  });
});

describe("Check which arrow is rendered", () => {
  it("should render the arrow string Asc", () => {
    const expectedAsc = "↑";

    const sortColumns = e => {
      e.setProps({ arrow: expectedAsc, sortedColumn: "Name" });
    };

    const props = { headerFields, sortedColumn, arrow, sortColumns };
    const wrapper = setup(props);
    const buttonHeader = wrapper.find("th#Name");

    buttonHeader.simulate("click", wrapper);

    const arrowTag = wrapper.find("span#Name");
    expect(arrowTag.text()).toContain(expectedAsc);
  });

  it("should render the arrow string Desc", () => {
    arrow = "↑";
    const expectedDesc = "↓";

    const sortColumns = e => {
      e.setProps({
        arrow: expectedDesc,
        sortedColumn: "Name"
      });
    };

    const props = { headerFields, sortedColumn, arrow, sortColumns };
    const wrapper = setup(props);
    const buttonHeader = wrapper.find("th#Name");

    buttonHeader.simulate("click", wrapper);

    const arrowTag = wrapper.find("span#Name");
    expect(arrowTag.text()).toContain(expectedDesc);
  });
});
