import React, { Component } from 'react';
import Actions from '../../actions/actions.js';
import SingleTab from './singleTab.js';
import './tabsColumn.css';


class TabsColumn extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  addTab = () => {
    Actions.addTab();
  }

  render() {
    return (
      <div className='tabs-column'>

        <div onClick={this.addTab} className='add-tab clickable'>
          <strong>+</strong> Add Tab
        </div>

        {this.props.tabsArray.map((tab, index) => {
          return <SingleTab tab={tab} index={index} key={index} selectedTab={this.props.selectedTab} />
        })}
        
      </div>
    );
  }
}

export default TabsColumn;