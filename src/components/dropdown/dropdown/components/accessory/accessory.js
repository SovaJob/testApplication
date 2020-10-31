// @flow

/* REACT */
import React from "react";
import { View } from "react-native";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";

type _t_props = {|
  baseColor?: string,
|};

export default (props: _t_props): Node => {
  const { baseColor: backgroundColor } = props;

  // FUNCTIONS
  return (
    <View style={styles.accessory}>
      <View style={styles.triangleContainer}>
        <View style={[styles.triangle, { backgroundColor }]} />
      </View>
    </View>
  );

};
