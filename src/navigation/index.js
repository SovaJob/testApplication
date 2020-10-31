// @flow

/* REACT */
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

/* CUSTOM MODULES */
import MainStack from "src/navigation/main/main";

/* TYPES */
import type { Node } from "react";

export default (): Node => (
  <SafeAreaProvider>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </SafeAreaProvider>
);
