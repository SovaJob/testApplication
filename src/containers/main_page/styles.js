// @flow

/* REACT */
import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

/* CUSTOM MODULES */
import { getHeightWithScaleFactor, getWidthWithScaleFactor, getFontWithScaleFactor } from "src/utils/layout";

import { COLORS } from "src/configs/styles";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: getBottomSpace(),
  },

  leftBtnContainer: {
    marginLeft: getWidthWithScaleFactor(15),
    height: getHeightWithScaleFactor(36),
    width: getHeightWithScaleFactor(36),
    borderRadius: getHeightWithScaleFactor(18),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.HALF_WHITE,
  },

  headerContainer: {
    backgroundColor: COLORS.MAIN_ORANGE,
  },

  backIcon: {
    alignSelf: "center",
  },

  headerTitleText: {
    color: COLORS.WHITE,
    fontSize: getFontWithScaleFactor(18),
    lineHeight: getFontWithScaleFactor(20),
  },

  categoriesContainer: {
    marginTop: getHeightWithScaleFactor(15),
    paddingHorizontal: getWidthWithScaleFactor(15),
    flexDirection: "row",
    justifyContent: "space-between",
  },

  filterContainer: {
    flexDirection: "row",
    alignContent: "center",
    width: getWidthWithScaleFactor(280),
    height: getHeightWithScaleFactor(45),
    borderWidth: getHeightWithScaleFactor(1),
    borderRadius: getHeightWithScaleFactor(5),
    borderColor: COLORS.GRAY,
    paddingHorizontal: getWidthWithScaleFactor(10),
  },
  filterValueText: {
    flex: 1,
    textAlign: "left",
    color: COLORS.BLACK,
    fontSize: getFontWithScaleFactor(16),
    lineHeight: getFontWithScaleFactor(45),
  },
  plusBtn: {
    height: getHeightWithScaleFactor(45),
    width: getHeightWithScaleFactor(45),
    backgroundColor: COLORS.MAIN_ORANGE,
    justifyContent: "center",
    borderRadius: getHeightWithScaleFactor(5),
  },
  listHeader: {
    marginTop: getHeightWithScaleFactor(15),
    paddingHorizontal: getWidthWithScaleFactor(15),
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: getHeightWithScaleFactor(45),
    backgroundColor: COLORS.BACKGROUND_GRAY,
    alignItems: "center",
  },
  arrowContainer: {
    alignSelf: "center",
    height: getHeightWithScaleFactor(20),
    width: getHeightWithScaleFactor(20),
    borderRadius: getHeightWithScaleFactor(10),
    backgroundColor: COLORS.MAIN_ORANGE,
    justifyContent: "center",
  },
  dateHeaderText: {
    flex: 1,
    textAlign: "center",
    color: COLORS.BLACK,
    fontSize: getFontWithScaleFactor(16),
    lineHeight: getFontWithScaleFactor(45),
  },
  flatList: {
    flex: 1,
  },
});
