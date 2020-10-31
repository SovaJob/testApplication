// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import HeaderTitle from "./header_title";


describe("HeaderTitle tests", () => {

  test("renders correctly", (): void => {
    const tree = renderer
      .create(<HeaderTitle textKey="forgot_password:title" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
