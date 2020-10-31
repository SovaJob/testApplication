// @flow


/* REACT */
import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";

/* MODULES */
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

/* CUSTOM MODULES */
import BaseText from "src/components/base_text/base_text";

/* CONFIGS */
import { COLORS } from "src/configs/styles";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";


type _t_props = {|
  text: string,
  isChecked?: boolean,
  // FUNCTIONS
  onPress: () => void
|};


export default (props: _t_props): Node => {
  const { text, isChecked, onPress } = props;

  return (
    <View style={styles.container} >
      <TouchableWithoutFeedback onPress={onPress} >
        <View style={styles.outerbox} >
          {
            isChecked
              ? (
                <MaterialIcon
                  name="check"
                  size={16}
                  color={COLORS.CHECKBOX.OUTERBOX_BORDER}
                />
              )
              : null
          }
        </View>
      </TouchableWithoutFeedback>

      <BaseText
        style={styles.labelText}
        textKey={text}
      />
    </View>
  );
};
