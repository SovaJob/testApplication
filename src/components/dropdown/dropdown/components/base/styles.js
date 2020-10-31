// @flow

import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
  getFontWithScaleFactor,
  getWidthWithScaleFactor
} from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";

export default StyleSheet.create({
  labelsWrapper: {
    backgroundColor: COLORS.WHITE,
    height: getHeightWithScaleFactor(16),
    top: getHeightWithScaleFactor(-8),
    marginStart: getWidthWithScaleFactor(12),
    paddingHorizontal: getWidthWithScaleFactor(3),
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  labelText: {
    color: COLORS.INPUT.TEXT_COLOR,
    fontSize: getFontWithScaleFactor(12),
    lineHeight: getFontWithScaleFactor(14),
  },
  inputContainer: {
    height: getHeightWithScaleFactor(40),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.INPUT.BORDER_COLOR,
    paddingHorizontal: getWidthWithScaleFactor(12),
    flex: 1,
    justifyContent: "center"
  },
  inputText: {
    fontSize: getFontWithScaleFactor(14),
    lineHeight: getFontWithScaleFactor(16),
  },
});
