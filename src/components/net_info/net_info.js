// @flow


/* REACT */
import React, { Component } from "react";
import {
  Modal,
  View
} from "react-native";

/* MODULES */
import NetInfo from "@react-native-community/netinfo";

/* CUSTOM MODULES */
import BaseText from "../base_text/base_text";
import styles from "./styles";

/* TYPES */
import type { Node } from "react";

type _t_state = {|
  isConnected: boolean
|};

type _t_networkState = {|
  isConnected: boolean,
  type: string
|};

export default class extends Component<{}, _t_state> {

  state = {
    isConnected: true
  };

  unsubscribe: () => void = () => {};

  componentDidMount(): void {
    // TODO(everybody): check on real devices. net info don't work on SIMULATORS IOS.
    this.unsubscribe = NetInfo.addEventListener((state: _t_networkState) => {
      this.setState(() => ({ isConnected: state.isConnected }));
    });
  }

  componentWillUnmount(): void {
    this.unsubscribe();
  }

  render(): Node {
    if (this.state.isConnected) return null;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={!this.state.isConnected}
        onRequestClose={() => { }}
      >
        <View style={styles.main}>
          <View style={styles.box}>
            <BaseText style={styles.text} textKey="net_info:wrong_connection"/>
          </View>
        </View>
      </Modal>
    );
  }
}
