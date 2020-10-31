// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import BaseText from "./base_text";


describe("BaseText tests", () => {
  test("renders correctly", (): void => {
    const tree = renderer
      .create(<BaseText textKey="sign_up:link_btn" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly with child", (): void => {
    const tree = renderer
      .create(
        <BaseText>
          Test text
        </BaseText>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly when title", (): void => {
    const tree = renderer
      .create(
        <BaseText
          isTitle
          textKey="sign_up:link_btn"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
