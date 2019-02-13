import React, { Component } from 'react';
import Actions from '../../actions/actions.js';
import './contentColumn.css';

class ContentColumn extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  updateTabContent = (e) => {
    const tabInfo = {
      index: this.props.selectedTab,
      content: e.target.value,
    }
    Actions.updateTabContent(tabInfo);
  }

  toggleModal = () => {
    Actions.toggleModal();
  }

  render() {
    return (
      <div className='content-column'>
        <div className='content-top-bar'>
          <div className='clickable close-button' onClick={this.toggleModal}>X</div>
        </div>
        <div className='full-height' >  
          {this.props.tabData &&
            <textarea className='content-textArea' placeholder="Write you player notes here..." rows="10" cols="50" type="text" value={this.props.tabData.content} onChange={this.updateTabContent} />
          }
        </div>
      </div>
    );
  }
}

export default ContentColumn;