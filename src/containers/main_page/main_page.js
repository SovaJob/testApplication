// @flow

/* REACT */
import React, { useEffect } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { observer, inject } from "mobx-react";
import moment from "moment";
import i18n from "i18next";

/* CUSTOM MODULES */
import { MainListItem, BaseText, Icon } from "src/components";

/* STYLES */
import { getFontWithScaleFactor } from "src/utils/layout";

import styles from "./styles";
import { COLORS } from "src/configs/styles";

/* TYPES */
import type { Node } from "react";
import type { _t_navigation, _t_dataItem } from "src/types";

import type { _t_mainStore, _t_appStore } from "src/stores";

type _t_injected = {|
  filterValue: $PropertyType<_t_mainStore, "filterValue">,
  setFilterValue: $PropertyType<_t_mainStore, "setFilterValue">,
  setModalVisible: $PropertyType<_t_mainStore, "setModalVisible">,
|};

type _t_defaultProps = {|
  ..._t_injected,
  navigation: _t_navigation,
|};

type _t_props = {|
  ..._t_defaultProps,
|};

const day = moment("01.03.2020", "DD.MM.YYYY");

// tmp data for list
const TMP_DATA = [];

while (TMP_DATA.length < 30) {
  TMP_DATA.push({
    num: day.date(),
    dayName: day.format("dddd"),
    time: "10:00 AM - 06-00 AM",
  });
  day.add(1, "day");
}
const AntDesignIcon = Icon.antDesign;

const injected = ({ appStore: { mainStore } }: {appStore: _t_appStore, mainStore: _t_mainStore}): _t_injected => ({
  filterValue: mainStore.filterValue,
  setFilterValue: mainStore.setFilterValue,
  setModalVisible: mainStore.setModalVisible,
});

export default inject(injected)(
  observer((props: _t_props): Node => {
    const { filterValue, setModalVisible, navigation } = props;

    useEffect(() => {
      navigation.setOptions({
        headerLeft: () => (
          <View style={styles.leftBtnContainer}>
            <AntDesignIcon style={styles.backIcon} name="left" size={getFontWithScaleFactor(18)} color={COLORS.WHITE} />
          </View>
        ),
        headerShown: true,
        headerStyle: styles.headerContainer,
        headerTitle: () => <BaseText style={styles.headerTitleText} textKey="main:header_title" />,
      });
    });

    const _keyExtractor = (item) => String(item.num);

    const renderListItem = ({ item, index }: {item: _t_dataItem, index: number}) => (
      <MainListItem item={item} showTime={filterValue === i18n.t("main:filter_availabilities")} index={index} />
    );

    return (
      <View style={styles.container}>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity
            style={styles.filterContainer}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <BaseText style={styles.filterValueText} value={filterValue} />
            <AntDesignIcon
              style={styles.backIcon}
              name="down"
              size={getFontWithScaleFactor(18)}
              color={COLORS.MAIN_ORANGE}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.plusBtn}>
            <AntDesignIcon style={styles.backIcon} name="plus" size={getFontWithScaleFactor(18)} color={COLORS.WHITE} />
          </TouchableOpacity>
        </View>
        <View style={styles.listHeader}>
          <TouchableOpacity style={styles.arrowContainer}>
            <AntDesignIcon style={styles.backIcon} name="left" size={getFontWithScaleFactor(10)} color={COLORS.WHITE} />
          </TouchableOpacity>
          <BaseText style={styles.dateHeaderText} value="March 2020" />
          <TouchableOpacity style={styles.arrowContainer}>
            <AntDesignIcon
              style={styles.backIcon}
              name="right"
              size={getFontWithScaleFactor(10)}
              color={COLORS.WHITE}
            />
          </TouchableOpacity>
        </View>
        <FlatList data={TMP_DATA} style={styles.flatList} renderItem={renderListItem} keyExtractor={_keyExtractor} />
      </View>
    );
  }),
);
