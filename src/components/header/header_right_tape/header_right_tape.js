// @flow


/* REACT */
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";

/* CUSTOM MODULES */
import BaseText from "src/components/base_text/base_text";

/* CONFIGS */
import CONFIG from "src/configs/main_config";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";

type _t_props = {||};

type _t_state = {|
  visible: boolean
|};


export default class extends Component<_t_props, _t_state> {

  state = { visible: true }


  // ==================
  // ===== RENDER =====
  // ==================


  render(): Node {
    if (!this.state.visible) {
      return null;
    }

    return ["dev", "stage"].includes(CONFIG.ENV)
      ? (
        <TouchableOpacity
          testID="headerRightTape"
          style={styles.tape}
          onLongPress={() => this.setState(() => ({ visible: false }))}
        >
          <BaseText
            style={styles.title}
            numberOfLines={2}
          >
            {`${CONFIG.ENV}\n29.11.19 16-30`}
          </BaseText>
        </TouchableOpacity>
      )
      : null;
  }
}
