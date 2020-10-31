// @flow

/* REACT */
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import COLORS from "src/configs/styles/colors";

import { getHeightWithScaleFactor, getFontWithScaleFactor, getWidthWithScaleFactor } from "src/utils/layout";

export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  backgroundBtn: {
    flex: 1,
  },
  pickerContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    justifyContent: "flex-end",

    backgroundColor: COLORS.WHITE,
    width: getWidthWithScaleFactor(375),
    paddingBottom: getBottomSpace(),
    paddingTop: getHeightWithScaleFactor(10),
    paddingHorizontal: getWidthWithScaleFactor(20),
  },
  cancelButton: {
    marginTop: getHeightWithScaleFactor(10),
    height: getHeightWithScaleFactor(40),
    width: "100%",
    justifyContent: "center",
    borderTopWidth: getHeightWithScaleFactor(1),
    borderTopColor: COLORS.BACKGROUND_GRAY,
  },
  cancelText: {
    fontSize: getFontWithScaleFactor(18),
    lineHeight: getFontWithScaleFactor(22),
    color: COLORS.MAIN_ORANGE,
    textAlign: "left",
  },
});
