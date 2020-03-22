import React from "react";
import { shallow } from "enzyme";
import TableBodyRows from "./TableBodyRows";
import { findByTestAttr } from "../../test/testUtils";

const setup = (props = {}) => {
  let wrapper = shallow(<TableBodyRows {...props} />);
  return wrapper;
};

const tableDataRow = {
  name: "Esteban",
  picture: "imageTest.png"
};
const headerFields = ["Name", "Picture"];
const indexDataRow = 1;

describe("Check <TableBody/>", () => {
  it("should render the TableBodyRows component without errors", () => {
    const props = { tableDataRow, headerFields, indexDataRow };
    const wrapper = setup(props);
    const tableBodyRowsComponent = findByTestAttr(
      wrapper,
      "tableBodyRows-component"
    );
    expect(tableBodyRowsComponent.length).toBe(1);
  });

  it("should render an image tag if there is a string that endswith (.png,.jpg,.svg)", () => {
    const props = { tableDataRow, headerFields, indexDataRow };
    const wrapper = setup(props);
    const tableBodyRowsComponent = wrapper.find("img");
    expect(tableBodyRowsComponent.length).toBe(1);
  });

  it("should render text if there is the string does not endswith an img extension", () => {
    const expectedText = "Esteban";
    const props = { tableDataRow, headerFields, indexDataRow };
    const wrapper = setup(props);
    const tableBodyRowsComponent = wrapper.find("td").first();
    expect(tableBodyRowsComponent.text()).toEqual(expectedText);
  });
});
