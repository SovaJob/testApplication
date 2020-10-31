// @flow


/* REACT */
import React, { Component } from "react";
import {
  ActivityIndicator,
  Modal,
  View
} from "react-native";

/* MODULES */
import { inject, observer } from "mobx-react";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_utilsStore, _t_appStore } from "src/stores";

type _t_defaultProps = {|
  isLoaderVisible: $PropertyType<_t_utilsStore, "isLoaderVisible">
|};

type _t_props = {|
  ..._t_defaultProps,
|};


const injected = ({ appStore: { utilsStore } }: { appStore: _t_appStore }): _t_defaultProps => ({
  isLoaderVisible: utilsStore.isLoaderVisible,
});


export default
@inject(injected)
@observer
class extends Component<_t_props> {

  static defaultProps: _t_defaultProps;


  render(): Node {
    if (!this.props.isLoaderVisible) {
      return null;
    }

    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.isLoaderVisible}
        onRequestClose={() => { }}
      >
        <View style={styles.content} >
          <ActivityIndicator />
        </View>
      </Modal>
    );
  }
}
