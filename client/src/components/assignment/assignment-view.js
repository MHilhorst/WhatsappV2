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
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    if (this.props.owner) {
      return (
        <>
          <Col
            md={{ size: 6 }}
            lg={{ size: 6 }}
            className="no-gutters"
            style={{ height: this.state.height - 57, overflow: 'hidden' }}
          >
            <CodeDisplay height={this.state.height - 106} />
          </Col>
          <Col
            md={{ size: 6 }}
            lg={{ size: 6 }}
            style={{
              height: this.state.height - 57,
              overflowY: 'scroll',
              overflowX: 'hidden'
            }}
          >
            <p>asd</p>
          </Col>
        </>
      );
    } else {
      return (
        <>
          <Col
            md={{ size: 6 }}
            lg={{ size: 6 }}
            className="no-gutters"
            style={{ height: this.state.height - 57, overflow: 'hidden' }}
          >
            <CodeDisplay height={this.state.height - 106} />
          </Col>
          <Col
            md={{ size: 6 }}
            lg={{ size: 6 }}
            style={{
              height: this.state.height - 57,
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
}

export default AssignmentView;
