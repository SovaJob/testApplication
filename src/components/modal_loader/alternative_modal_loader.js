// @flow


/* REACT */
import React, { Component } from "react";
import {
  ActivityIndicator,
  Animated
} from "react-native";

/* MODULES */
import { inject, observer } from "mobx-react";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_animatedValue } from "src/types";
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

type _t_state = {|
  isLoaderVisible: boolean
|}

export default
@inject(injected)
@observer
class extends Component<_t_props, _t_state> {

  static defaultProps: _t_defaultProps;

  state = {
    isLoaderVisible: false
  }

  animation: _t_animatedValue = new Animated.Value(0);

  hideAnimation = () => {
    // start change opacity from 1 to 0, hide loader
    Animated.timing(this.animation, {
      toValue: 0,
      timing: 400,
      useNativeDriver: true,
    }).start(() => {
      this.setState(() => ({
        isLoaderVisible: false
      }));
    });
  }

  showAnimation = () => {
    // show loader and start change opacity from 0 to 1,
    this.setState(() => ({
      isLoaderVisible: true
    }), () => {
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });
  }

  componentDidUpdate(prevProps: _t_props) {
    const { isLoaderVisible } = this.props;
    // if current value of isLoaderVisible === false
    // and state.isLoaderVisible === true need hide animation.
    if (
      (isLoaderVisible !== prevProps.isLoaderVisible
      && !isLoaderVisible)
      || (!isLoaderVisible && !this.state.isLoaderVisible)
    ) {
      this.hideAnimation();
    }

    // if current value of isLoaderVisible === true need show animation.
    if (isLoaderVisible !== prevProps.isLoaderVisible && isLoaderVisible) {
      this.showAnimation();
    }
  }

  render(): Node {
    if (!this.state.isLoaderVisible) return null;

    return (
      <Animated.View style={[styles.alternativeContent, {
        opacity: this.animation
      }]}
      >
        <ActivityIndicator />
      </Animated.View>
    );
  }
}
