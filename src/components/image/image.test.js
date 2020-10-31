// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import Image from "./image";


describe("Image tests", () => {

  const size = 50;

  test("renders correctly", (): void => {
    const tree = renderer
      .create(
        <Image
          width={size}
          height={size}
          uri="https://via.placeholder.com/150"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // TODO(anybody): add test when pass image from assets !

});
