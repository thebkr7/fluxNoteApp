import EventEmitter from 'events';
import Dispatcher from '../dispatcher/dispatcher.js';
import ls from 'local-storage'

class TabsStore extends EventEmitter {
  constructor() {
    super();
    this.tabsArray = [
      {
        title: '',
        content: '',
      }
    ];
    this.selectedTab = 0;
  }

  handleActions = (action) => {
    switch (action.type) {
      case 'ADD_TAB': {
        this.tabsArray.push(
          {
            title: '',
            content: '',
          }
        );
        this.emit('tabsStoreUpdated');
        break;
      };
      case 'REMOVE_TAB': {
        this.tabsArray.splice(action.value, 1);
        this.emit('tabsStoreUpdated');
        break;
      };
      case 'UPDATE_TAB_INFO': {
        this.tabsArray[action.value.index].content = action.value.content;
        this.emit('tabsStoreUpdated');
        break;
      };
      case 'TAB_SELECTED': {
        this.selectedTab = action.value;
        this.emit('tabsStoreUpdated');
        break;
      };
      case 'RECOVER_DATA': {
        this.tabsArray = action.value.tabsArray;
        this.selectedTab = action.value.selectedTab;
        this.emit('tabsStoreUpdated');
        break;
      };
    };
  }

  getTabs = () => {
    ls.set('tabsArray', this.tabsArray); //Set local storage
    return this.tabsArray;
  }

  getSelectedTab = () => {
    ls.set('selectedTab', this.selectedTab); //Set local storage
    return this.selectedTab;
  }

}


const tabsStore = new TabsStore();
Dispatcher.register(tabsStore.handleActions);
export default tabsStore;