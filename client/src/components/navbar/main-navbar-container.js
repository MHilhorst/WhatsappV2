import React from 'react';
import MainNavbarView from './main-navbar-view';

class MainNavbarContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <MainNavbarView session={this.props.session} />;
  }
}

export default MainNavbarContainer;
