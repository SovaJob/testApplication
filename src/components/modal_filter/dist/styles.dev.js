"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNative = require("react-native");

var _reactNativeIphoneXHelper = require("react-native-iphone-x-helper");

var _colors = _interopRequireDefault(require("src/configs/styles/colors"));

var _layout = require("src/utils/layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// @flow

/* REACT */
var _default = _reactNative.StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: _colors["default"].BLACK,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  backgroundBtn: {
    flex: 1
  },
  pickerContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: _colors["default"].WHITE,
    width: (0, _layout.getWidthWithScaleFactor)(375),
    paddingBottom: (0, _reactNativeIphoneXHelper.getBottomSpace)(),
    paddingTop: (0, _layout.getHeightWithScaleFactor)(10),
    paddingHorizontal: (0, _layout.getWidthWithScaleFactor)(20)
  },
  cancelButton: {
    marginTop: (0, _layout.getHeightWithScaleFactor)(10),
    height: (0, _layout.getHeightWithScaleFactor)(40),
    width: "100%",
    justifyContent: "center",
    borderTopWidth: (0, _layout.getHeightWithScaleFactor)(1),
    borderTopColor: _colors["default"].BACKGROUND_GRAY
  },
  cancelText: {
    fontSize: (0, _layout.getFontWithScaleFactor)(18),
    lineHeight: (0, _layout.getFontWithScaleFactor)(22),
    color: _colors["default"].MAIN_ORANGE,
    textAlign: "left"
  }
});

exports["default"] = _default;