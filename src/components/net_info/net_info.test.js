// @flow


/* REACT */
import React from "react";
/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import NetInfoComponent from "./net_info";


describe("NetInfoComponent tests", () => {
  test("renders online", (): void => {
    const tree = renderer
      .create(
        <NetInfoComponent />
      );

    expect(tree.toJSON()).toMatchSnapshot();
  });

});
