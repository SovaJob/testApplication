// @flow


/* REACT */
import React from "react";

/* MODULES */
import renderer from "react-test-renderer";

/* CUSTOM MODULES */
import AlternativeModalLoader from "./alternative_modal_loader";
import UtilsStore from "src/stores/utils_store";


describe("AlternativeModalLoader tests", () => {
  test("renders correctly", (): void => {
    const _utilsStore = new UtilsStore();
    _utilsStore.setIsLoaderVisible(true);
    expect(_utilsStore.isLoaderVisible).toBe(true);

    const tree = renderer
      .create(
        // $FlowFixMe
        <AlternativeModalLoader.wrappedComponent
          appStore={{ utilsStore: _utilsStore }}
        />
      );

    tree.getInstance().showAnimation();

    expect(tree.toJSON()).toMatchSnapshot();
  });

});
