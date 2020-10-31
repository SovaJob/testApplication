// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import Checkbox from "./checkbox";


describe("Checkbox tests", () => {

  const mockHandler = jest.fn(() => { });

  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <Checkbox
          text="login:show_password"
          onPress={mockHandler}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly when checked", (): void => {
    const tree = renderer
      .create(
        <Checkbox
          isChecked
          text="login:show_password"
          onPress={mockHandler}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
