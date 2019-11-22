import React from 'react';
import './sidebar.css';
import { IoIosSearch, IoIosCode } from 'react-icons/io';
import NavigationItem from './navigation-item';

class MainSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar sticky-top">
        <div className="sidebar-header">
          <img
            src={require('../../assets/images/logowhite.png')}
            width={42}
            alt="logo"
          />
        </div>
        <NavigationItem
          step="Search"
          url="/bijenkorf"
          icon={<IoIosSearch size={25} color="white" />}
        />
        <NavigationItem
          step="review"
          url="/ticketswap"
          icon={<IoIosCode size={25} color="white" />}
        />
      </div>
    );
  }
}
export default MainSidebar;
