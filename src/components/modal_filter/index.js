// @flow

/* REACT */
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Modal, Animated } from "react-native";

/* MODULES */
import { inject, observer } from "mobx-react";
import i18n from "i18next";

import BaseText from "src/components/base_text/base_text";

import OptionItem from "src/components/list_items/option_item";

/* STYLES */
import styles from "./styles";
import { getHeightWithScaleFactor } from "src/utils/layout";

/* TYPES */
import type { Node } from "react";
import type { _t_mainStore, _t_appStore } from "src/stores";
import type { _t_animatedValue } from "src/types";

type _t_injected = {|
  modalVisible: $PropertyType<_t_mainStore, "modalVisible">,
  setModalVisible: $PropertyType<_t_mainStore, "setModalVisible">,
  filterValue: $PropertyType<_t_mainStore, "filterValue">,
  setFilterValue: $PropertyType<_t_mainStore, "setFilterValue">,
|};

type _t_props = {|
  ..._t_injected,
|};

const injected = ({ appStore: { mainStore } }: {appStore: _t_appStore, mainStore: _t_mainStore}): _t_injected => ({
  modalVisible: mainStore.modalVisible,
  setModalVisible: mainStore.setModalVisible,
  filterValue: mainStore.filterValue,
  setFilterValue: mainStore.setFilterValue,
});

export default inject(injected)(
  observer((props: _t_props): Node => {
    const [opacityAnimation] = useState<_t_animatedValue>(new Animated.Value(0));
    const [pickerPositionAnimation] = useState<_t_animatedValue>(new Animated.Value(0));

    const {
      modalVisible, setModalVisible, filterValue, setFilterValue
    } = props;

    const animateOpacity = (toValue: number) => {
      Animated.timing(opacityAnimation, {
        toValue,
        duration: 100,
        useNativeDriver: true,
      }).start();
    };

    const animatePicker = (toValue: number) => {
      Animated.timing(pickerPositionAnimation, {
        toValue,
        duration: 100,
        useNativeDriver: false,
      }).start();
    };

    useEffect(() => {
      animateOpacity(opacityAnimation._value ? 0 : 0.4);
      animatePicker(pickerPositionAnimation._value ? 0 : -getHeightWithScaleFactor(778));
    }, [modalVisible]);

    if (!modalVisible) {
      return null;
    }

    const onItemPress = (newValue: string) => {
      setFilterValue(i18n.t(newValue));
      setModalVisible(false);
    };

    return (
      <Modal transparent visible={!!modalVisible} onRequestClose={() => {}}>
        <TouchableOpacity
          style={styles.backgroundBtn}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Animated.View style={[styles.content, { opacity: opacityAnimation }]} />
        </TouchableOpacity>

        <Animated.View style={[styles.pickerContainer, { bottom: pickerPositionAnimation }]}>
          <OptionItem onPress={onItemPress} itemTextKey="main:filter_availabilities" selectedItemText={filterValue} />
          <OptionItem onPress={onItemPress} itemTextKey="main:filter_preferences" selectedItemText={filterValue} />

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <BaseText style={styles.cancelText} textKey="common:cancel" />
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    );
  }),
);
