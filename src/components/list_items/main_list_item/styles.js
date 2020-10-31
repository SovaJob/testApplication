// @flow

/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { getHeightWithScaleFactor, getWidthWithScaleFactor, getFontWithScaleFactor } from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";

export default StyleSheet.create({
  container: {
    height: getHeightWithScaleFactor(45),
    width: "100%",
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: getWidthWithScaleFactor(15),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backgroundGray: {
    backgroundColor: COLORS.BACKGROUND_GRAY,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    paddingVertical: getHeightWithScaleFactor(7),
  },
  numText: {
    fontSize: getFontWithScaleFactor(16),
    lineHeight: getFontWithScaleFactor(18),
    color: COLORS.BLACK,
    fontWeight: "bold",
  },
  dayNameText: {
    fontSize: getFontWithScaleFactor(16),
    lineHeight: getFontWithScaleFactor(18),
    color: COLORS.INPUT.TEXT_COLOR,
  },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dot: {
    height: getHeightWithScaleFactor(16),
    width: getHeightWithScaleFactor(16),
    borderRadius: getHeightWithScaleFactor(8),
    backgroundColor: COLORS.DOT_RED,
  },
  timeText: {
    marginLeft: getWidthWithScaleFactor(8),
    fontSize: getFontWithScaleFactor(16),
    lineHeight: getFontWithScaleFactor(18),
    color: COLORS.BLACK,
  },
});
