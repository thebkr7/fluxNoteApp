import React, { Component } from 'react';
import ModalStore from '../stores/modalStore.js';
import TabsStore from '../stores/tabsStore.js';
import Actions from '../actions/actions.js';
import './buttons.css';

class ModalButton extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: true,
      tabsCount: 0,
    };
  }

  componentDidMount() {
    ModalStore.on('modalStoreUpdated', this.updateModalState);
    TabsStore.on('tabsStoreUpdated', this.upateTabsState);
  }

  componentWillUnmount() {
    ModalStore.removeListener('modalStoreUpdated', this.updateModalState);
    TabsStore.removeListener('tabsStoreUpdated', this.upateTabsState);    
  }

  updateModalState = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  upateTabsState = () => {
    this.setState({
      tabsCount: TabsStore.getTabs().length,
    });
  }

  toggleModal = () => {
    Actions.toggleModal(true);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal} className="btn striped-shadow blue">
          <span>
            Open
          </span>
        </button>
        <div className='counter'>
          {this.state.tabsCount}
        </div>
      </div>
    );
  }
}

export default ModalButton;