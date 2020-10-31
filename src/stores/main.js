// @flow

/* MODULES */
import { action, observable } from "mobx";

import type { _t_filter_value } from "src/types";

export default class MainStore {
  @observable filterValue: _t_filter_value = "Availabilities";

  @observable modalVisible: boolean = false;

  // ===================
  // ===== ACTIONS =====
  // ===================

  /**
   * Set new filter value
   *
   * @param {_t_filter_value} newValue - new value of filter
   */
  @action setFilterValue = (newValue: _t_filter_value) => {
    this.filterValue = newValue;
  };

  /**
   * Set modal visible value
   *
   * @param {boolean} newValue - new value of filter
   */
  @action setModalVisible = (newValue: boolean) => {
    this.modalVisible = newValue;
  };
}
