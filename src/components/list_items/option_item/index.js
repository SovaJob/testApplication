// @flow

/* REACT */
import React from "react";
import { TouchableOpacity } from "react-native";
import i18n from "i18next";

import BaseText from "src/components/base_text/base_text";

import styles from "./styles";

type _t_props = {|
  onPress: (x: string) => void,
  itemTextKey: string,
  selectedItemText: string,
|};

export default (props: _t_props) => {
  const {
    onPress, itemTextKey, selectedItemText, ...restProps
  } = props;
  return (
    <TouchableOpacity
      style={[styles.filterItem, selectedItemText === i18n.t(itemTextKey) && styles.selectedButton]}
      onPress={() => {
        onPress(itemTextKey);
      }}
      {...restProps}
    >
      <BaseText
        style={[styles.filterText, selectedItemText === i18n.t(itemTextKey) && styles.selectedText]}
        textKey={itemTextKey}
      />
    </TouchableOpacity>
  );
};
