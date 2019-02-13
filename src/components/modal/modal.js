import React, { Component } from 'react';
import ModalStore from '../../stores/modalStore.js';
import TabsStore from '../../stores/tabsStore.js';
import Actions from '../../actions/actions.js';
import TabsColumn from './tabsColumn.js';
import ContentColumn from './contentColumn.js';
import './modal.css';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      tabsArray: [  //NOTE: For new users we create a blank tab instead of having them click the new tab button
        {
          title: '',
          content: '',
        }
      ],
      selectedTab: 0,
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
      modalOpen: ModalStore.getModalStatus(),
    })
  }

  upateTabsState = () => {
    this.setState({
      tabsArray: TabsStore.getTabs(),
      selectedTab: TabsStore.getSelectedTab(),
    })
  }

  toggleModal = () => {
    Actions.toggleModal();
  }

  render() {
    return (
      <div>
        {this.state.modalOpen &&
          <div className='modal'>
            <div className='modal-background' onClick={this.toggleModal}></div>
            
            <div className='modal-inner'>

              <TabsColumn selectedTab={this.state.selectedTab} tabsArray={this.state.tabsArray} />

              <ContentColumn selectedTab={this.state.selectedTab} tabData={this.state.tabsArray[this.state.selectedTab]} />
              
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Modal;