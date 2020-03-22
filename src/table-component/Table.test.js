import React from "react";
import { shallow } from "enzyme";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { findByTestAttr } from "../../test/testUtils";

const setup = (props = {}, state = null) => {
  let wrapper = shallow(<Table {...props} />, {
    disableLifecycleMethods: true
  });
  if (state) return wrapper.setState(state);
  return wrapper;
};

const props = {
  headerFields: [{ name: "Esteban", city: "Reading" }],
  data: []
};

describe("Check <Table/>", () => {
  it("should render the Table component without errors", () => {
    //const state={ tableDataRemaining:[]}
    const wrapper = setup(props);
    /* const wrappers=setup(props)
        const wrappersHeaders = wrappers.find(TableHeader).dive()
        console.log(wrappersHeaders.debug()) */
    const tableComponent = findByTestAttr(wrapper, "component-table");
    expect(tableComponent.length).toBe(1);
  });

  it("should find TableHeader Component", () => {
    const wrapper = setup(props);
    const headerComponent = wrapper.find(TableHeader);
    expect(headerComponent).toHaveLength(1);
  });

  it("should find TableBody Component", () => {
    const wrapper = setup(props);
    const bodyComponent = wrapper.find(TableBody);
    expect(bodyComponent).toHaveLength(1);
  });
});
