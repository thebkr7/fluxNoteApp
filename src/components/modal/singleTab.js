import React, { Component } from 'react';
import Actions from '../../actions/actions.js';

class SingleTab extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  selectTab = () => {
    Actions.selectTab(this.props.index);
  }

  removeTab = () => {
    Actions.removeTab(this.props.index);    
  }

  render() {
    return (
      <div className={`single-tab clickable ${this.props.selectedTab === this.props.index ? 'active-tab' : ''}`} onClick={this.selectTab}>
        Index: {this.props.index}
        <div className='delete-tab-button' onClick={this.removeTab}>X</div>
      </div>
    );
  }
}

export default SingleTab;