import React, { Component } from 'react';
import ls from 'local-storage'
import ModalButton from './modalButton.js';
import Modal from './modal/modal.js';
import Actions from '../actions/actions.js';
import './app.css';

class App extends Component {

  componentDidMount() {
    if (ls.get('tabsArray')) {
      var userData = {
        modalOpen: ls.get('modalOpen'),
        selectedTab: ls.get('selectedTab'),
        tabsArray: ls.get('tabsArray'),
      }
      Actions.recoverData(userData);
    }
  }

  render() {
    return (
      <div className='app'>
        <ModalButton />
        <Modal />
      </div>
    );
  }
}

export default App;
