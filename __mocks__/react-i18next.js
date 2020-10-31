// @flow


/* MODULES */
import { I18nextProvider } from "react-i18next";

// @Note: example how to mock:
//        https://github.com/i18next/react-i18next/blob/master/example/test-jest/__mocks__/react-i18next.js

module.exports = {
  Translation: (
    { children }: { children: (t: (param: string) => string, i18n: Object) => Node }
  ) => children((k) => k, { i18n: {} }),

  // mock if needed
  I18nextProvider,
};
