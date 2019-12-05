import React from 'react';
import AssignmentView from './assignment-view';
import { config } from '../../config';
import { convertToRaw } from 'draft-js';
import { getJWT } from '../../utils/getJWT';
class AssignmentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignment: {},
      owner: null,
      loading: true,
      feedback: null,
      jwt: null,
      height: null
    };
    this.handleFeedback = this.handleFeedback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  handleFeedback = feedback => {
    console.log(feedback);
    this.setState({ feedback });
  };
  handleSubmit = () => {
    const feedback = convertToRaw(this.state.feedback);

    fetch(`${config.host}/api/assignment/feedback/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.state.jwt}`
      },
      body: JSON.stringify({
        assignment_id: this.state.assignment._id,
        feedback: JSON.stringify(feedback)
      })
    }).then(res => {
      res.json().then(data => {
        if (data.success) {
          this.setState({ feedbackSuccess: true });
        } else {
          this.setState({ feedbackSuccess: false });
        }
      });
    });
  };

  componentDidMount() {
    const jwt = getJWT();
    fetch(`${config.host}/api/assignment/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res =>
        res.json().then(data => {
          this.setState({ assignment: data.data, jwt: jwt, loading: false });
        })
      )
      .catch(err => {
        console.log(err);
      });
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }
  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <AssignmentView
          assignment={this.state.assignment}
          handleFeedback={this.handleFeedback}
          handleSubmit={this.handleSubmit}
          height={this.state.height}
        />
      );
    }
  }
}

export default AssignmentContainer;
