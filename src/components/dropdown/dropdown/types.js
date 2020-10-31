// @flow

import type { Node } from "react";
import type {
  _t_textStyle, _t_viewStyle, _t_animatedValue
} from "src/types";
import type { ViewLayoutEvent } from "react-native/Libraries/Components/View/ViewPropTypes";

export type _t_item = {|
  label: string,
  value: string
|};


export type _t_event = ViewLayoutEvent;

export type _t_touchableWithout = {|
  pressRetentionOffset?: {|
    top: number,
    left: number,
    bottom: number,
    right: number
  |},
  onPress?: () => void,

  accessibilityLabel?: string,
|}

export type _t_defaultProps = {|
  testID?: string,
  nativeID?: string,
  accessible?: boolean,

  selected: number,
  hitSlop?: {|
    top: number,
    right: number,
    bottom: number,
    left: number
  |},
  disabled?: boolean,
  data?: Array<_t_item>,

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

  absoluteRTLLayout?: boolean,

  dropdownOffset?: {|
    top: number,
    left: number
  |},

  dropdownMargins: {|
    min: number,
    max: number
  |},

  shadeOpacity?: number,

  rippleDuration: number,
  animationDuration: number,

  fontSize: number,

  textColor?: string,
  itemColor?: string,
  baseColor?: string,

  itemCount?: number,
  itemPadding: number,
  supportedOrientations?: Array<
    "portrait" |
    "portrait-upside-down" |
    "landscape" |
    "landscape-left" |
    "landscape-right">,
  useNativeDriver: boolean,
|}

export type _t_props = {|
  ..._t_defaultProps,
  ..._t_touchableWithout,
  label: string,
  placeholder?: string,

  value?: string | number,

  dropdownPosition?: number,

  selectedItemColor?: string,
  disabledItemColor?: string,

  itemTextStyle?: _t_textStyle,

  onLayout?: (e: _t_event) => void,
  onFocus?: () => void,
  onBlur?: () => void,
  onChangeText: (value: string, index: number, data: Array<_t_item>) => void,

  renderBase?: Node,
  renderAccessory?: () => void,

  containerStyle?: _t_viewStyle,
  overlayStyle?: _t_viewStyle,
  pickerStyle?: _t_viewStyle,

  rippleInsets?: {
    top: number,
    left: number,
    bottom: number,
    right: number
  },
  onPressValue: (index: number) => void,
|};

/* eslint-disable-next-line flowtype/require-exact-type */
export type _t_renderBase = {
  data?: Array<_t_item>,
  labelExtractor: (label: _t_item, index: number) => string,
  dropdownOffset?: {|
    top: number,
    left: number
  |},
  label: string,
  placeholder?: string,
}

export type _t_state = {|
  opacity: _t_animatedValue,
  selected: number,
  modal: boolean,
  value: string | number,
  width?: number,
  top?: number,
  left?: number,
  leftInset?: number,
  rightInset?: number,
|}
