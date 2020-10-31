// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import Dropdown from "./index";

const DROP_DOWN_DATA = [
  {
    label: "languagesLabels:en",
    value: "en"
  },
  {
    label: "languagesLabels:ru",
    value: "ru"
  }
];

describe("Dropdown tests", () => {

  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <Dropdown
          label="profile:lng_title"
          selected={1}
          data={DROP_DOWN_DATA}
          onChangeText={jest.fn()}
          onPressValue={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
