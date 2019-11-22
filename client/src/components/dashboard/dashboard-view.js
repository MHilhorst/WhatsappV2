import React from 'react';
import './dashboard.css';
import { Col, Row } from 'reactstrap';
import CodeDisplay from '../code-display';
import Briefing from '../briefing';
import Flexbox from 'flexbox-react';
class DashboardView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  onChange(newValue) {
    console.log(newValue);
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
    return (
      <>
        <Col
          md={{ size: 6 }}
          lg={{ size: 6 }}
          className="no-gutters"
          style={{ height: this.state.height - 56.27, overflow: 'hidden' }}
        >
          <CodeDisplay height={this.state.height - 105} />
        </Col>
        <Col md={{ size: 6 }} lg={{ size: 6 }}>
          <Briefing />
        </Col>
      </>
    );
  }
}

export default DashboardView;
