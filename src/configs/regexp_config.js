// @flow

export default {
  // eslint-disable-next-line max-len
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[a-zA-Z])(?=.*[\d\W])[a-zA-Z\d\W]{8,}$/,
  passwordNum: /^(?=.*\d)[\d]{8,}$/
};