// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

/* CUSTOM MODULES */
import Button from "./button";


describe("Button tests", () => {

  const mockHandler = jest.fn(() => { });

  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <Button
          text="forgot_password:btn_reset_password"
          onPress={mockHandler}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly with child", (): void => {
    const tree = renderer
      .create(
        <Button onPress={mockHandler} >
          Test button text
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders correctly when disabled and reversed", (): void => {
    const tree = renderer
      .create(
        <Button
          disabled
          reversed
          text="forgot_password:btn_reset_password"
          // FUNCTIONS
          onPress={jest.fn(mockHandler)}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders content as null when no children and no text are provided", (): void => {
    const tree = renderer
      .create(
        <Button
          // FUNCTIONS
          onPress={jest.fn(mockHandler)}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("check on press handler", (): void => {
    const component = shallow(
      <Button
        text="forgot_password:btn_reset_password"
        onPress={mockHandler}
      />
    );
    // TODO: adapter don't return tree of react-native elements.
    // should return TouchableOpacity
    const button = component.find({ testID: "button" }).first();
    button.simulate("press");
    expect(component.prop("onPress")).toHaveBeenCalled();
  });

  // TODO(anybody): for some reason even if button is disabled onPress handler is still called !
  // test("check on press handler on disabled button", (): void => {
  //   const component = shallow(
  //     <Button
  //       disabled
  //       text="forgot_password:btn_reset_password"
  //       onPress={mockHandler}
  //     />
  //   );
  //   const button = component.find("TouchableOpacity").first();
  //   button.simulate("press");
  //   expect(component.prop("onPress")).not.toHaveBeenCalled();
  // });

});
