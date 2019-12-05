import React from 'react';
import './assignment.css';
import { Col } from 'reactstrap';
import CodeDisplay from '../code-display';
import Briefing from './briefing';
import Feedback from './feedback';
import Submission from './submission';

class AssignmentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Col
          md={{ size: 6 }}
          lg={{ size: 6 }}
          className="no-gutters"
          style={{ height: this.props.height - 57, overflow: 'hidden' }}
        >
          <CodeDisplay
            height={this.props.height - 106}
            assignment={this.props.assignment}
          />
        </Col>
        <Col
          md={{ size: 6 }}
          lg={{ size: 6 }}
          style={{
            height: this.props.height - 57,
            overflowY: 'scroll',
            overflowX: 'hidden'
          }}
        >
          <Briefing />
          <Feedback handleFeedback={this.props.handleFeedback} />
          <Submission handleSubmit={this.props.handleSubmit} />
        </Col>
      </>
    );
  }
}

export default AssignmentView;
