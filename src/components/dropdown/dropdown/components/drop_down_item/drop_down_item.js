// @flow

/* eslint-disable no-bitwise */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-multi-assign */
/* REACT */
import React from "react";

/* CUSTOM MODULES */
import BaseText from "src/components/base_text/base_text";
import DropdownItem from "src/components/dropdown/item";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type { _t_textStyle, _t_viewStyle } from "src/types";
import type { _t_item } from "../../types";


type _t_props = {|
  selected: number,
    leftInset?: number,
  rightInset?: number,
  item: _t_item,
  index: number,
  itemTextStyle?: _t_textStyle,
  valueExtractor: (value: _t_item, index: number) => string,
  labelExtractor: (label: _t_item, index: number) => string,
  propsExtractor: (item: _t_item, index: number) => null | {
    style: _t_viewStyle,
    disabled: boolean,
    index: number,
    shadeOpacity?: number,
    shadeColor?: string,
    onPress: () => void
  },

  textColor?: string,
  itemColor?: string,
  baseColor?: string,


  selectedItemColor?: string,
  disabledItemColor?: string,
  fontSize: number,
  shadeOpacity?: number,

  // FUNCTIONS
  onSelect: () => void,
|};

export default (props: _t_props): Node => {
  if (!props.item) {
    return null;
  }

  const {
    valueExtractor,
    labelExtractor,
    propsExtractor,
    textColor,
    itemColor,
    baseColor,
    selectedItemColor = textColor,
    disabledItemColor = baseColor,
    fontSize,
    itemTextStyle,
    shadeOpacity,
    // state
    selected,
    leftInset,
    rightInset,
    item,
    index,
    onSelect,
  } = props;

  let propsExtracted = propsExtractor(item, index);

  const { style, disabled } = (propsExtracted = {
    shadeColor: baseColor,
    shadeOpacity,
    ...propsExtracted,
    onPress: onSelect
  });

  const value = valueExtractor(item, index);
  const label = labelExtractor(item, index);

  const title = label == null ? value : label;

  const color = disabled
    ? disabledItemColor
    : ~selected
      ? index === selected
        ? selectedItemColor
        : itemColor
      : selectedItemColor;

  const textStyle = { color, fontSize };

  // FUNCTIONS
  return (
    <DropdownItem
      index={index}
      onPress={propsExtracted.onPress}
      style={[
        style,
        {
          paddingLeft: leftInset,
          paddingRight: rightInset
        }
      ]}
    >
      <BaseText
        style={[styles.item, itemTextStyle, textStyle]}
        numberOfLines={1}
        textKey={title}
      />
    </DropdownItem>
  );
};
