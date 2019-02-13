import Dispatcher from '../dispatcher/dispatcher.js';

const Actions = {

  toggleModal() {
    Dispatcher.dispatch({
      type: 'TOGGLE_MODAL',
    });
  },

  addTab() {
    Dispatcher.dispatch({
      type: 'ADD_TAB',
    });
  },

  removeTab(index) {
    Dispatcher.dispatch({
      type: 'REMOVE_TAB',
      value: index,
    });
  },

  updateTabContent(tabInfo) {
    Dispatcher.dispatch({
      type: 'UPDATE_TAB_INFO',
      value: tabInfo,
    });
  },

  selectTab(index) {
    Dispatcher.dispatch({
      type: 'TAB_SELECTED',
      value: index,
    });
  },

  recoverData(data) {
    Dispatcher.dispatch({
      type: 'RECOVER_DATA',
      value: data,
    });
  }

};

export default Actions;
