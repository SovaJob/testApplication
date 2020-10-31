// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import BaseInput from "./base_input";


describe("BaseInput tests", () => {
  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <BaseInput
          label="label"
          placeholder="placeholder"
          value="value"
          // FUNCTIONS
          onChangeText={(value: string) => { }} // eslint-disable-line no-unused-vars
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders errors correctly", (): void => {
    const tree = renderer
      .create(
        <BaseInput
          label="label"
          placeholder="placeholder"
          value="value"
          errorMessage="Error message"
          hasError
          // FUNCTIONS
          onChangeText={(value: string) => { }} // eslint-disable-line no-unused-vars
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
