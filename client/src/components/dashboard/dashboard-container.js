import React from 'react';
import DashboardView from './dashboard-view';
import { config } from '../../config';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch(`${config.host}/api/source-code/test?name=MHilhorst&repo=utrecht`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      res.json().then(data => {
        console.log(data);
      });
    });
  }
  render() {
    return <DashboardView />;
  }
}

export default DashboardContainer;
