// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import Accessory from "./accessory";


describe("Accessory tests", () => {

  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <Accessory
          baseColor="red"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
