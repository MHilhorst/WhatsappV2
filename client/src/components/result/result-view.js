import React from 'react';
import { Col } from 'reactstrap';
import CodeDisplay from '../code-display';
import { Box } from '../../styles/style';
import FeedbackResultItem from './feedback-result-item';
class ResultView extends React.Component {
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
          <CodeDisplay height={this.props.height - 106} />
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
          <Box padding="0">
            {this.props.feedbackArr.map(item => {
              return <FeedbackResultItem feedback={item} />;
            })}
          </Box>
        </Col>
      </>
    );
  }
}

export default ResultView;
