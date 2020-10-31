// @flow

/* REACT */
import React from "react";
import { StyleSheet, View } from "react-native";

/* CUSTOM MODULES */
import Navigator from "./navigation";
import { ModalFilter } from "src/components";

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default () => (
  <View style={styles.root}>
    <Navigator />

    <ModalFilter />
  </View>
);
