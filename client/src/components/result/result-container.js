import React from 'react';
import ResultView from './result-view';
import { config } from '../../config';
class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackArr: [],
      loading: true,
      height: null
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    fetch(
      `${config.host}/api/assignment/feedback/${this.props.match.params.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res => {
      res.json().then(data => {
        if (data.data.length > 0) {
          this.setState({ feedbackArr: data.data, loading: false });
        }
      });
    });

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
    if (this.state.loading) {
      return null;
    } else {
      return (
        <ResultView
          feedbackArr={this.state.feedbackArr}
          height={this.state.height}
        />
      );
    }
  }
}

export default ResultContainer;
