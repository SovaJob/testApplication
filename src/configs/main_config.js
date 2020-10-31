// @flow


/* MODULES */
import CONFIG from "react-native-config";


export default {

  // ENV: CONFIG.ENV,
  ENV: CONFIG.ENV || "prod",

  API_URL: "",

  ENABLE_LOGS: __DEV__,
};
