// @flow

import * as React from "react";
import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js";

/**
 * Mock alert from react native
 */
jest.mock("react-native/Libraries/Alert/Alert.js", () => ({
  alert: jest.fn(),
}));


/**
 * Mock react navigation
 */
jest.mock("react-navigation", () => {
  // eslint-disable-next-line global-require
  const { View, SafeAreaView } = require("react-native");

  return {
    NavigationEvents: () => () => <View />,
    createStackNavigator: () => () => <View />,
    createBottomTabNavigator: () => () => <View />,
    createMaterialTopTabNavigator: () => () => <View />,
    getParams: (param, defaultValue) => defaultValue,
    withNavigationFocus: (param) => param,
    SafeAreaView
  };
});

jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo);
