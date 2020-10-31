// @flow

import { StyleSheet, Platform } from "react-native";

/* CUSTOM MODULES */
import {
  getHeightWithScaleFactor,
} from "src/utils/layout";

/* CONFIGS */
import { COLORS } from "src/configs/styles";

export default StyleSheet.create({
  container: {
    width: "100%"
  },

  overlay: {
    ...StyleSheet.absoluteFillObject
  },
  picker: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 2,
    position: "absolute",

    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: COLORS.BLACK,
        shadowOpacity: 0.54,
        shadowOffset: { width: 0, height: 2 }
      },

      android: {
        elevation: 2
      }
    })
  },
  itemSeparator: {
    flex: 1,
    height: 2,
    backgroundColor: COLORS.INPUT.BORDER_COLOR
  },
  scroll: {
    flex: 1,
    borderRadius: 2
  },
  scrollContainer: {
    paddingVertical: 8
  },
  error: {
    marginTop: getHeightWithScaleFactor(4)
  }
});
