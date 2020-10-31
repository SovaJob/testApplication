
/* eslint-disable no-bitwise */
// @flow
/* eslint max-lines: ["error", {"max": 600, "skipBlankLines": true}] */

import React, { PureComponent } from "react";
import {
  View,
  FlatList,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
  I18nManager
} from "react-native";

/* CUSTOM MODULES */
import {
  DropDownItemText,
  Accessory,
  Base
} from "./components";

/* STYLES */
import styles from "./styles";


/* TYPES */

import type {
  _t_item,
  _t_event,
  _t_props,
  _t_state,
  _t_defaultProps,
  _t_renderBase,
} from "./types";

const DEFAULT_TOP_OFFSET = 32;

export default class Dropdown extends PureComponent<_t_props, _t_state> {
  static defaultProps: _t_defaultProps = {
    hitSlop: {
      top: 6,
      right: 4,
      bottom: 6,
      left: 4
    },

    disabled: false,
    selected: -1,

    data: [],


    // $FlowFixMe return string literal "en"
    valueExtractor: ({ value } = {}) => value,
    // eslint-disable-next-line react/default-props-match-prop-types, no-unused-vars
    labelExtractor: ({ label } = {}, index: number) => label,
    propsExtractor: () => null, // eslint-disable-line react/default-props-match-prop-types

    absoluteRTLLayout: false,

    dropdownOffset: {
      top: DEFAULT_TOP_OFFSET,
      left: 0
    },

    dropdownMargins: { // eslint-disable-line react/default-props-match-prop-types
      min: 8,
      max: 16
    },
    shadeOpacity: 0.12,

    rippleDuration: 400, // eslint-disable-line react/default-props-match-prop-types
    animationDuration: 225, // eslint-disable-line react/default-props-match-prop-types

    fontSize: 16, // eslint-disable-line react/default-props-match-prop-types

    textColor: "rgba(0, 0, 0, .87)",
    itemColor: "rgba(0, 0, 0, .54)",
    baseColor: "rgba(0, 0, 0, .38)",

    itemCount: 4,
    itemPadding: 8, // eslint-disable-line react/default-props-match-prop-types

    supportedOrientations: [
      "portrait",
      "portrait-upside-down",
      "landscape",
      "landscape-left",
      "landscape-right"
    ],

    useNativeDriver: false // eslint-disable-line react/default-props-match-prop-types
  };

  updateContainerRef = this.updateRef.bind(this, "container");

  updateScrollRef = this.updateRef.bind(this, "scroll");

  blur = () => this.onClose()

  mounted: boolean = false;

  focused: boolean = false;

  scroll = null;

  container = null;

  state = {
    opacity: new Animated.Value(0),
    selected: -1,
    modal: false,
    value: "",

    top: 0,
    width: 0,
    left: 0,
    leftInset: 0,
    rightInset: 0
  };

  componentDidUpdate({ value }: _t_props) {
    if (value !== this.props.value) {
      this.setState(() => ({ value })); // eslint-disable-line react/no-did-update-set-state
    }
  }

  componentDidMount() {
    this.mounted = true;

    const { selected } = this.props;
    if (selected !== -1) {
      this.onSelect(selected);
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onPress = () => {
    const {
      data,
      disabled,
      onFocus,
      itemPadding,
      rippleDuration,
      dropdownOffset,
      dropdownMargins: { min: minMargin, max: maxMargin },
      animationDuration,
      absoluteRTLLayout,
      useNativeDriver
    } = this.props;

    if (disabled) {
      return;
    }

    const itemCount = data?.length;
    const timestamp = Date.now();

    if (!itemCount) {
      return;
    }

    this.focused = true;

    if (typeof onFocus === "function") {
      onFocus();
    }

    const dimensions = Dimensions.get("window");
    if (this.container) {
      this.container.measureInWindow((x, y, containerWidth) => {
        const { opacity } = this.state;

        /* Adjust coordinates for relative layout in RTL locale */
        if (I18nManager.isRTL && !absoluteRTLLayout) {
        // eslint-disable-next-line no-param-reassign
          x = dimensions.width - (x + containerWidth);
        }

        const delay = Math.max(
          0,
          rippleDuration - animationDuration - (Date.now() - timestamp)
        );
        const selected = this.selectedIndex();

        let leftInset;
        let left = x + dropdownOffset?.left - maxMargin;

        if (left > minMargin) {
          leftInset = maxMargin;
        } else {
          left = minMargin;
          leftInset = minMargin;
        }

        let right = x + containerWidth + maxMargin;
        let rightInset;

        if (dimensions.width - right > minMargin) {
          rightInset = maxMargin;
        } else {
          right = dimensions.width - minMargin;
          rightInset = minMargin;
        }

        const top = y + dropdownOffset?.top - itemPadding;

        this.setState(() => ({
          modal: true,
          width: right - left,
          top,
          left,
          leftInset,
          rightInset,
          selected
        }));

        setTimeout(() => {
          if (this.mounted) {
            this.resetScrollOffset();

            Animated.timing(opacity, {
              duration: animationDuration,
              toValue: 1,
              useNativeDriver
            }).start(() => {
              if (this.mounted && Platform.OS === "ios") {
                const { flashScrollIndicators } = this.scroll || {};

                if (typeof flashScrollIndicators === "function") {
                  flashScrollIndicators.call(this.scroll);
                }
              }
            });
          }
        }, delay);
      });
    }
  }

  onClose = (value?: string | number = this.state.value) => {
    const { onBlur, animationDuration, useNativeDriver } = this.props;
    const { opacity } = this.state;

    Animated.timing(opacity, {
      duration: animationDuration,
      toValue: 0,
      useNativeDriver
    }).start(() => {
      this.focused = false;

      if (typeof onBlur === "function") {
        onBlur();
      }

      if (this.mounted) {
        this.setState(() => ({ value, modal: false }));
      }
    });
  }

  onSelect = (index: number) => {
    const {
      data,
      valueExtractor,
      onChangeText,
      animationDuration,
      rippleDuration
    } = this.props;

    const value = data && valueExtractor(data[index], index);
    const delay = Math.max(0, rippleDuration - animationDuration);

    if (typeof onChangeText === "function" && data && value) {
      onChangeText(value, index, data);
      this.props.onPressValue(index);
    }

    setTimeout(() => this.onClose(value), delay);
  }

  onLayout = (event: _t_event) => {
    const { onLayout } = this.props;

    if (typeof onLayout === "function") {
      onLayout(event);
    }
  }

  value() {
    const { value } = this.state;

    return value;
  }

  selectedIndex() {
    const { value } = this.state;
    const { data, valueExtractor } = this.props;

    return data ? data.findIndex(
      (item, index) => item != null && value === valueExtractor(item, index)
    ) : 0;
  }

  isFocused() {
    return this.focused;
  }

  itemSize() {
    const { fontSize, itemPadding } = this.props;

    return Math.ceil(fontSize * 1.5 + itemPadding * 2);
  }

  visibleItemCount(): number {
    const { data, itemCount } = this.props;
    return Math.min(data?.length || 0, itemCount || 0);
  }

  tailItemCount() {
    return Math.max(this.visibleItemCount() - 2, 0);
  }

  rippleInsets() {
    const {
      top = 16, right = 0, bottom = -8, left = 0
    } = this.props.rippleInsets || {};

    return {
      top,
      right,
      bottom,
      left
    };
  }

  resetScrollOffset() {
    const { selected } = this.state;
    const { data, dropdownPosition } = this.props;

    let offset = 0;
    const itemCount = data?.length || 0;
    const itemSize = this.itemSize();
    const tailItemCount = this.tailItemCount();
    const visibleItemCount = this.visibleItemCount();

    if (itemCount > visibleItemCount) {
      if (dropdownPosition == null) {
        switch (selected) {
          case -1:
            break;

          case 0:
          case 1:
            break;

          default:
            if (selected >= itemCount - tailItemCount) {
              offset = itemSize * (itemCount - visibleItemCount);
            } else {
              offset = itemSize * (selected - 1);
            }
        }
      } else {
        let index = selected - dropdownPosition;

        if (dropdownPosition < 0) {
          index -= visibleItemCount;
        }

        index = Math.max(0, index);
        index = Math.min(index, itemCount - visibleItemCount);

        if (~selected) {
          offset = itemSize * index;
        }
      }
    }

    if (this.scroll) {
      this.scroll.scrollToOffset({ offset, animated: false });
    }
  }

  updateRef(name: "container" | "scroll", ref: Object) {
    // Cannot assign `ref` to `this[name]` because an index
    //  signature declaring the expected key / value type is missing in  `Dropdown` [1].Flow(InferError)

    // $FlowFixMe
    this[name] = ref;
  }

  keyExtractor = (item: _t_item, index: number) => {
    const { valueExtractor } = this.props;
    return `${index}-${valueExtractor(item, index)}`;
  }

  renderBase = (props: _t_renderBase) => {
    const { value } = this.state;
    const {
      data,
      renderBase,
      labelExtractor,
      dropdownOffset,
      label,
      placeholder,
    } = this.props;

    return (
      <Base
        renderBaseProps={props}
        value={value}
        data={data}
        renderBase={renderBase}
        labelExtractor={labelExtractor}
        dropdownOffset={dropdownOffset}
        label={label}
        placeholder={placeholder}
        renderAccessory={this.renderAccessory}
        index={this.selectedIndex()}
      />
    );
  }

  renderAccessory = () => (
    <Accessory baseColor={this.props.baseColor}/>
  )

  renderItem = ({ item, index }: { item: _t_item, index: number}) => {
    const {
      selected,
      leftInset,
      rightInset
    } = this.state;

    // TODO: combine properties for DropDowItem
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
    } = this.props;

    // FUNCTIONS
    return (
      <DropDownItemText
        selected={selected}
        leftInset={leftInset}
        rightInset={rightInset}
        valueExtractor={valueExtractor}
        labelExtractor={labelExtractor}
        propsExtractor={propsExtractor}
        textColor={textColor}
        itemColor={itemColor}
        baseColor={baseColor}
        selectedItemColor={selectedItemColor}
        disabledItemColor={disabledItemColor}
        fontSize={fontSize}
        itemTextStyle={itemTextStyle}
        shadeOpacity={shadeOpacity}
        item={item}
        index={index}
        onSelect={this.onSelect}
      />
    );
  }

  render() {
    const {
      renderBase,
      renderAccessory,
      containerStyle,
      overlayStyle: overlayStyleOverrides,
      pickerStyle: pickerStyleOverrides,

      hitSlop,
      pressRetentionOffset,
      testID,
      nativeID,
      accessible,
      accessibilityLabel,

      supportedOrientations,

      ...props
    } = this.props;

    const {
      data, disabled, itemPadding, dropdownPosition
    } = props;

    const {
      left, top, width, opacity, selected, modal
    } = this.state;

    const itemCount = data?.length || 0;
    const visibleItemCount = this.visibleItemCount();
    const tailItemCount = this.tailItemCount();
    const itemSize = this.itemSize();

    const height = 2 * itemPadding + itemSize * visibleItemCount;
    let translateY = -itemPadding;

    if (dropdownPosition == null) {
      switch (selected) {
        case -1:
          translateY -= itemCount === 1 ? 0 : itemSize;
          break;

        case 0:
          break;

        default:
          if (selected >= itemCount - tailItemCount) {
            translateY
              -= itemSize * (visibleItemCount - (itemCount - selected));
          } else {
            translateY -= itemSize;
          }
      }
    } else if (dropdownPosition < 0) {
      translateY -= itemSize * (visibleItemCount + dropdownPosition);
    } else {
      translateY -= itemSize * dropdownPosition;
    }

    const overlayStyle = { opacity };

    const pickerStyle = {
      width,
      height,
      top,
      left,
      transform: [{ translateY }]
    };

    const touchableProps = {
      disabled,
      hitSlop,
      pressRetentionOffset,
      onPress: this.onPress,
      testID,
      nativeID,
      accessible,
      accessibilityLabel
    };

    return (
      <View
        onLayout={this.onLayout}
        ref={this.updateContainerRef}
        style={[styles.container].concat(containerStyle)}
      >
        <TouchableWithoutFeedback {...touchableProps}>
          <View pointerEvents="box-only">{this.renderBase(props)}</View>
        </TouchableWithoutFeedback>

        <Modal
          visible={modal}
          transparent
          onRequestClose={this.blur}
          supportedOrientations={supportedOrientations}
        >
          <Animated.View
            style={[styles.overlay, overlayStyle, overlayStyleOverrides]}
            onStartShouldSetResponder={() => true}
            onResponderRelease={this.blur}
          >
            <View
              style={[styles.picker, pickerStyle, pickerStyleOverrides]}
              onStartShouldSetResponder={() => true}
            >
              <FlatList
                ref={this.updateScrollRef}
                data={data}
                style={styles.scroll}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                scrollEnabled={visibleItemCount < itemCount}
                contentContainerStyle={styles.scrollContainer}
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparator} />
                )}
              />
            </View>
          </Animated.View>
        </Modal>
      </View>
    );
  }
}
