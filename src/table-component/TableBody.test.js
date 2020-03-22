import React from "react";
import { shallow } from "enzyme";
import TableBody from "./TableBody";
import { findByTestAttr } from "../../test/testUtils";
import TableBodyRows from './TableBodyRows';

const setup = (props = {}) => {
  let wrapper = shallow(<TableBody {...props} />);
  return wrapper;
};
const tableData = [{
  name: "Esteban",
  picture: "imageTest.png"
}];
const headerFields = ["Name", "Picture"];

let loading = false;

describe("Check <TableBody/>", () => {
  it("should render the TableBody component without errors", () => {
    const props = { tableData, headerFields, loading };
    const wrapper = setup(props);
    const tableBodyComponent = findByTestAttr(wrapper, "table-body-component");
    expect(tableBodyComponent.length).toBe(1);
  });

  it('should render <TableBodyRows/>', ()=>{
    const props = { tableData, headerFields, loading };
    const wrapper = setup(props);
    const tableBodyRowsComponent = wrapper.find(TableBodyRows);
    expect(tableBodyRowsComponent).toHaveLength(1); 
  })

  it('should display `Loading` when loading more rows', ()=>{
    loading = true;
    const props = { tableData, headerFields, loading };
    const wrapper = setup(props);
    const inspectedComponent = wrapper.find('td');
    expect(inspectedComponent.props().style).toEqual({'display':'block'}); 
  })
  it('should not display `Loading` when loading more rows', ()=>{
    loading = false;
    const props = { tableData, headerFields, loading };
    const wrapper = setup(props);
    const inspectedComponent = wrapper.find('td');
    expect(inspectedComponent.props().style).toEqual({'display':'none'}); 
  })
  
});
