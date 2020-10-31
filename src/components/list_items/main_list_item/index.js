// @flow

/* REACT */
import React, { type Node } from "react";
import { View } from "react-native";

/* MODULES */
import BaseText from "src/components/base_text/base_text";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { _t_dataItem } from "src/types";

type _t_props = {|
  item: _t_dataItem,
  showTime: boolean,
  index: number,
|};

export default (props: _t_props): Node => {
  const {
    item: { num, dayName, time },
    showTime,
    index,
  } = props;

  return (
    <View style={[styles.container, index % 2 ? styles.backgroundGray : {}]}>
      <View style={styles.leftContainer}>
        <BaseText style={styles.numText} value={`${num < 10 ? 0 : ""}${num}`} />
        <BaseText style={styles.dayNameText} value={dayName} />
      </View>
      {showTime ? (
        <View style={styles.timeContainer}>
          <View style={styles.dot} />
          <BaseText style={styles.timeText} value={time} />
        </View>
      ) : null}
    </View>
  );
};
