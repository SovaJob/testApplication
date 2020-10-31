// @flow

import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor
} from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";

export default StyleSheet.create({
  accessory: {
    width: getWidthWithScaleFactor(24),
    height: getHeightWithScaleFactor(24),
    justifyContent: "center",
    alignItems: "center"
  },
  triangle: {
    width: getWidthWithScaleFactor(8),
    height: getHeightWithScaleFactor(8),
    transform: [
      {
        translateY: -getHeightWithScaleFactor(4)
      },
      {
        rotate: "45deg"
      }
    ],
  },
  triangleContainer: {
    width: getWidthWithScaleFactor(12),
    height: getHeightWithScaleFactor(6),
    overflow: "hidden",
    alignItems: "center",

    backgroundColor: COLORS.TRANSPARENT
  },
});
