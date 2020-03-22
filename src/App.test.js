import React from "react";
import App from "./App";
import Table from "./table-component/Table";

import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

const setup = (props = {}, state = null) => {
  let wrapper = shallow(<App {...props} />);
  if (state) return wrapper.setState(state);
  return wrapper;
};

const data = [];
const headerFields = [];
let hasLoaded = false;
const loading = false;
const error = {};

describe("Check App Component", () => {
  it("Should Render App Component without errors", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  it("Should find Table Component", () => {
    hasLoaded = true;
    const state = { data, headerFields, hasLoaded };
    const wrapper = setup(null, state);
    const tableComponent = wrapper.find(Table);
    expect(tableComponent).toHaveLength(1);
  });

  it("Should find Loading Component", () => {
    hasLoaded = false;
    const state = { data, headerFields, hasLoaded };
    const wrapper = setup(null, state);
    const loaderDiv = wrapper.find("div.loader");
    expect(loaderDiv.length).toBe(1);
  });

  it("Should find Network Error Component", () => {
    hasLoaded = false;
    const state = { data, headerFields, hasLoaded, loading, error };
    const wrapper = setup(null, state);
    const errorDiv = wrapper.find("div.error");
    expect(errorDiv.text()).toContain("Network error");
  });
});
