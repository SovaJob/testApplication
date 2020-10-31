// @flow

/* REACT */
import React from "react";
import { YellowBox } from "react-native";

/* MODULES */
import { I18nextProvider } from "react-i18next";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Provider } from "mobx-react";

/* CUSTOM MODULES */
import App from "src/app";
import i18n from "src/i18n/i18n"; // initialized i18next instance
import appStore from "src/stores";

YellowBox.ignoreWarnings(["Slider has been extracted"]);

export default () => (
  <Provider appStore={appStore}>
    <I18nextProvider i18n={i18n}>
      <ActionSheetProvider>
        <App />
      </ActionSheetProvider>
    </I18nextProvider>
  </Provider>
);
