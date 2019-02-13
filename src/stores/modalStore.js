import EventEmitter from 'events';
import Dispatcher from '../dispatcher/dispatcher.js';
import ls from 'local-storage'

class ModalStore extends EventEmitter {
  constructor() {
    super();
    this.modalOpen = false;
  }

  handleActions = (action) => {
    switch (action.type) {
      case 'TOGGLE_MODAL': {
        this.modalOpen = !this.modalOpen;
        this.emit('modalStoreUpdated');
        break;
      };
      default : {
        return;
      };
    };
  }

  getModalStatus = () => {
    ls.set('modalOpen', this.modalOpen); //Set local storage
    return this.modalOpen;
  }

}

const modalStore = new ModalStore();
Dispatcher.register(modalStore.handleActions);
export default modalStore;
