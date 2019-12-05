import React from 'react';
import OverviewView from './overview-view';
import { config } from '../../config';
class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignments: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch(`${config.host}/api/assignment/user/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.props.auth}`
      }
    }).then(res =>
      res.json().then(data => {
        this.setState({ assignments: data.assignments, loading: false });
      })
    );
  }
  render() {
    if (!this.state.loading) {
      return (
        <OverviewView
          assignments={this.state.assignments}
          history={this.props.history}
        />
      );
    } else {
      return null;
    }
  }
}
export default OverviewContainer;
