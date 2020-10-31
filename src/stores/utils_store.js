// @flow


/* REACT */
import { Alert } from "react-native";

/* MODULES */
import { action, observable } from "mobx";
import i18n from "i18next";

/* CUSTOM MODULES */
import logger from "src/utils/logger";


export default class UtilsStore {

  @observable isLoaderVisible: boolean = false;


  // ===================
  // ===== ACTIONS =====
  // ===================


  /**
   * Set is loader visible
   *
   * @param {boolean} newValue - new value of loader visibility
   */
  @action setIsLoaderVisible = (newValue: boolean) => {
    this.isLoaderVisible = newValue;
  }


  /**
   * Notify user
   *
   * @param {string} messageText - message text to show to the user
   * @param {*} messageToConsole - message text to show in console
   */
  notifyUser = (messageText: string, messageToConsole?: *, title?: string = i18n.t("common.error")) => {
    if (messageToConsole) {
      logger.warn(messageToConsole);
    }

    // @Note: make sure that loader is hidden before show alert
    this.setIsLoaderVisible(false);

    // @Note: need timeout because there is a conflict with modal loader
    setTimeout(() => {
      Alert.alert(
        title,
        messageText,
        [{ text: "OK", onPress: () => null }],
        { cancelable: false },
      );
    }, 400);
  }
}
