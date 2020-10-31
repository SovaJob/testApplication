// @flow

/* REACT */
import React from "react";
import { View, Platform } from "react-native";

/* CUSTOM COMPONENTS */
import BaseText from "src/components/base_text/base_text";

/* STYLES */
import styles from "./styles";

/* TYPES */
import type { Node } from "react";
import type {
  _t_renderBase,
  _t_item
} from "../../types";

type _t_props = {|
  value?: string | number,
  data: Array<_t_item>,
  renderBase?: Node,
  labelExtractor: (label: _t_item, index: number) => string,
  dropdownOffset: {|
    top: number,
    left: number
  |},
  label: string,
  placeholder?: string,

  renderAccessory?: () => void,
  index: number,
  renderBaseProps: _t_renderBase
|};

export default (props: _t_props): Node => {
  const {
    value,
    data,
    renderBase,
    labelExtractor,
    dropdownOffset,
    label,
    placeholder,
    renderAccessory,
    index,
    renderBaseProps
  } = props;

  let title;

  // eslint-disable-next-line no-bitwise
  if (~index && data && data.length) {
    title = labelExtractor(data[index], index);
  }

  if (title == null) {
    title = value;
  }

  if (typeof renderBase === "function") {
    return renderBase({
      ...renderBaseProps,
      title,
      value,
      renderAccessory
    });
  }

  title = title == null || typeof title === "string" ? title : String(title);

  return (
    <View>
      <View
        style={[{
          height:
              (dropdownOffset?.top) - Platform.select({
                ios: 1,
                android: 2
              })
        }
        ].concat(styles.inputContainer)}
      >
        <BaseText
            // TODO(anybody): Check this
            // BaseText don't have any props for spread.
            // {...props}
          style={styles.inputText}
          textKey={title || placeholder}
        />
      </View>
      <View style={styles.labelsWrapper}>
        {!!label && <BaseText style={[styles.labelText]} textKey={label} />}
      </View>
    </View>
  );
};
