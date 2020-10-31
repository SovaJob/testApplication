"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _reactNativeIphoneXHelper = require("react-native-iphone-x-helper");

var _layout = require("src/utils/layout");

var _styles = require("src/configs/styles");

// @flow

/* REACT */

/* CUSTOM MODULES */
var _default = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: (0, _reactNativeIphoneXHelper.getBottomSpace)()
  },
  leftBtnContainer: {
    marginLeft: (0, _layout.getWidthWithScaleFactor)(15),
    height: (0, _layout.getHeightWithScaleFactor)(36),
    width: (0, _layout.getHeightWithScaleFactor)(36),
    borderRadius: (0, _layout.getHeightWithScaleFactor)(18),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: _styles.COLORS.HALF_WHITE
  },
  headerContainer: {
    backgroundColor: _styles.COLORS.MAIN_ORANGE
  },
  backIcon: {
    alignSelf: "center"
  },
  headerTitleText: {
    color: _styles.COLORS.WHITE,
    fontSize: (0, _layout.getFontWithScaleFactor)(18),
    lineHeight: (0, _layout.getFontWithScaleFactor)(20)
  },
  categoriesContainer: {
    marginTop: (0, _layout.getHeightWithScaleFactor)(15),
    paddingHorizontal: (0, _layout.getWidthWithScaleFactor)(15),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  filterContainer: {
    flexDirection: "row",
    alignContent: "center",
    width: (0, _layout.getWidthWithScaleFactor)(280),
    height: (0, _layout.getHeightWithScaleFactor)(45),
    borderWidth: (0, _layout.getHeightWithScaleFactor)(1),
    borderRadius: (0, _layout.getHeightWithScaleFactor)(5),
    borderColor: _styles.COLORS.GRAY,
    paddingHorizontal: (0, _layout.getWidthWithScaleFactor)(10)
  },
  filterValueText: {
    flex: 1,
    textAlign: "left",
    color: _styles.COLORS.BLACK,
    fontSize: (0, _layout.getFontWithScaleFactor)(16),
    lineHeight: (0, _layout.getFontWithScaleFactor)(45)
  },
  plusBtn: {
    height: (0, _layout.getHeightWithScaleFactor)(45),
    width: (0, _layout.getHeightWithScaleFactor)(45),
    backgroundColor: _styles.COLORS.MAIN_ORANGE,
    justifyContent: "center",
    borderRadius: (0, _layout.getHeightWithScaleFactor)(5)
  },
  listHeader: {
    marginTop: (0, _layout.getHeightWithScaleFactor)(15),
    paddingHorizontal: (0, _layout.getWidthWithScaleFactor)(15),
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: (0, _layout.getHeightWithScaleFactor)(45),
    backgroundColor: _styles.COLORS.BACKGROUND_GRAY,
    alignItems: "center"
  },
  arrowContainer: {
    alignSelf: "center",
    height: (0, _layout.getHeightWithScaleFactor)(20),
    width: (0, _layout.getHeightWithScaleFactor)(20),
    borderRadius: (0, _layout.getHeightWithScaleFactor)(10),
    backgroundColor: _styles.COLORS.MAIN_ORANGE,
    justifyContent: "center"
  },
  dateHeaderText: {
    flex: 1,
    textAlign: "center",
    color: _styles.COLORS.BLACK,
    fontSize: (0, _layout.getFontWithScaleFactor)(16),
    lineHeight: (0, _layout.getFontWithScaleFactor)(45)
  },
  flatList: {
    flex: 1
  }
});

exports["default"] = _default;