// @flow

/* CUSTOM MODULES */
import UtilsStore from "src/stores/utils_store";
import MainStore from "src/stores/main";

class AppStore {
  utilsStore = new UtilsStore();

  mainStore = new MainStore();
}

const appStore = new AppStore();

export default appStore;
