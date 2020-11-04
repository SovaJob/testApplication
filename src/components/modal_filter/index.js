// @flow

/* REACT */
import React, { useState, useEffect } from "react";
import {
  TouchableOpacity, Modal, Animated, FlatList
} from "react-native";

/* MODULES */
import { inject, observer } from "mobx-react";
import i18n from "i18next";
import { getBottomSpace } from "react-native-iphone-x-helper";

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

const OPTIONS_TMP = [
  {
    id: 1,
    optionTitle: "main:filter_availabilities",
  },
  {
    id: 2,
    optionTitle: "main:filter_preferences",
  },
  // {
  //   id: 3,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 4,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 5,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 6,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 7,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 8,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 9,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 10,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 11,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 12,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 13,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 14,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 15,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 16,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 17,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 18,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 19,
  //   optionTitle: "main:filter_availabilities",
  // },
  // {
  //   id: 20,
  //   optionTitle: "main:filter_availabilities",
  // },
];

const injected = ({ appStore: { mainStore } }: {appStore: _t_appStore, mainStore: _t_mainStore}): _t_injected => ({
  modalVisible: mainStore.modalVisible,
  setModalVisible: mainStore.setModalVisible,
  filterValue: mainStore.filterValue,
  setFilterValue: mainStore.setFilterValue,
});

export default inject(injected)(
  observer((props: _t_props): Node => {
    const [opacityAnimation] = useState<_t_animatedValue>(new Animated.Value(0));
    const [pickerPositionAnimation] = useState<_t_animatedValue>(new Animated.Value(-getHeightWithScaleFactor(778))); // -getHeightWithScaleFactor(778)

    const [optionListScrollEnabled, setOptionListScrollEnabled] = useState<boolean>(true);
    const [optionItemHeight, setOptionItemHeight] = useState<number>(0);
    const [optionListContainerHeight, setOptionListContainerHeight] = useState<number>(0);

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

    const calculateOptionsScrollEnabled = () => {
      const maxHeightDisableScroll = optionListContainerHeight
        - getHeightWithScaleFactor(10) // container paddingTop
        - getBottomSpace() // bottom safe area
        - getHeightWithScaleFactor(40) // cancel button height
        - getHeightWithScaleFactor(10); // cancel button margin top

      const optionItemsHeight = OPTIONS_TMP.length * optionItemHeight;

      setOptionListScrollEnabled(maxHeightDisableScroll + 1 <= optionItemsHeight); // rounding issue
    };

    useEffect(() => {
      animateOpacity(opacityAnimation._value ? 0 : 0.4);
      animatePicker(pickerPositionAnimation._value ? 0 : -getHeightWithScaleFactor(778));
    }, [modalVisible]);

    useEffect(() => {
      calculateOptionsScrollEnabled();
    }, [optionItemHeight, optionListContainerHeight]);

    if (!modalVisible) {
      return null;
    }

    const onItemPress = (newValue: string) => {
      setFilterValue(i18n.t(newValue));
      setModalVisible(false);
    };

    const keyExtractor = (item) => `${item.id}`;

    const onOptioItemLayout = ({
      nativeEvent: {
        layout: { height },
      },
    }) => {
      if (optionItemHeight === 0) {
        setOptionItemHeight(height);
      }
    };

    const renderItem = ({ item }) => (
      <OptionItem
        onPress={onItemPress}
        itemTextKey={item.optionTitle}
        selectedItemText={filterValue}
        onLayout={onOptioItemLayout}
      />
    );

    const onListContainerLayout = ({
      nativeEvent: {
        layout: { height },
      },
    }) => {
      setOptionListContainerHeight(height);
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

        <Animated.View
          style={[styles.pickerContainer, { bottom: pickerPositionAnimation }]}
          onLayout={onListContainerLayout}
        >
          <FlatList
            data={OPTIONS_TMP}
            style={styles.scroll}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            scrollEnabled={optionListScrollEnabled}
          />

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
