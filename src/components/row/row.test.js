// @flow


/* REACT */
import React from "react";
import { View } from "react-native";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import Row from "./row";

describe("Row tests", () => {

  test("renders correctly male", (): void => {
    const tree = renderer
      .create(
        <Row><View /></Row>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
