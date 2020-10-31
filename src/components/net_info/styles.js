// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CONFIG */
import { COLORS } from "src/configs/styles";
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor
} from "src/utils/layout";

export default StyleSheet.create({
  text: {
    color: COLORS.BLACK
  },
  main: {
    flex: 1,
    backgroundColor: COLORS.BLACK_OPACITY06,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    height: getHeightWithScaleFactor(200),
    width: getWidthWithScaleFactor(250),
    paddingHorizontal: getWidthWithScaleFactor(20),
    alignItems: "center",
    justifyContent: "center",
  }
});
