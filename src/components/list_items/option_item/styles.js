// @flow

/* REACT */
import { StyleSheet } from "react-native";

import COLORS from "src/configs/styles/colors";

import { getHeightWithScaleFactor, getFontWithScaleFactor, getWidthWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  filterItem: {
    height: getHeightWithScaleFactor(40),
    paddingHorizontal: getWidthWithScaleFactor(10),
    width: "100%",
    borderRadius: getHeightWithScaleFactor(20),
    backgroundColor: COLORS.WHITE,
    justifyContent: "center",
  },
  filterText: {
    color: COLORS.BLACK,
    fontSize: getFontWithScaleFactor(18),
    lineHeight: getFontWithScaleFactor(22),
    textAlign: "left",
  },
  selectedText: {
    color: COLORS.WHITE,
  },
  selectedButton: {
    backgroundColor: COLORS.MAIN_ORANGE,
  },
});
