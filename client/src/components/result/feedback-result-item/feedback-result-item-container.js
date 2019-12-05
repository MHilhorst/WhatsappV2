import React from 'react';
import FeedbackResultItemView from './feedback-result-item-view';
class FeedbackResultItemContainer extends React.Component {
  render() {
    return (
      <FeedbackResultItemView
        feedback={this.props.feedback}
        feedbackContent={this.props.feedback.feedback}
      />
    );
  }
}

export default FeedbackResultItemContainer;
