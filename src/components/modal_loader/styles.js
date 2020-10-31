// @flow


/* REACT */
import { StyleSheet } from "react-native";

/* CUSTOM MODULES */
import { COLORS } from "src/configs/styles";


export default StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: COLORS.BLACK_OPACITY06,
    alignItems: "center",
    justifyContent: "center",
  },
  alternativeContent: {
    flex: 1,
    backgroundColor: COLORS.BLACK_OPACITY06,
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFill,
  },
});
