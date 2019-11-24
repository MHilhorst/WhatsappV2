import React from 'react';
import AssignmentView from './assignment-view';
import { config } from '../../config';
import { convertToRaw } from 'draft-js';
class AssignmentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignment: {},
      owner: null,
      loading: true,
      feedback: null
    };
    this.handleFeedback = this.handleFeedback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFeedback = feedback => {
    console.log(feedback);
    this.setState({ feedback });
  };
  handleSubmit = () => {
    const feedback = convertToRaw(this.state.feedback);
  };

  checkOwner = assignment => {
    if (assignment.user_id === this.props.session._id) {
      this.setState({ owner: true, loading: false });
    } else {
      this.setState({ owner: false, loading: false });
    }
  };
  componentDidMount() {
    fetch(`${config.host}/api/assignment/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res =>
        res.json().then(data => {
          console.log(data);
          this.setState({ assignment: data.data });
          this.checkOwner(data.data);
        })
      )
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <AssignmentView
          assignment={this.state.assignment}
          owner={this.state.owner}
          handleFeedback={this.handleFeedback}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

export default AssignmentContainer;
