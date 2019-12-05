import React from 'react';
import { Container } from 'reactstrap';
import OverviewItem from './overview-item';
class OverviewView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        {this.props.assignments.map(assignment => {
          return (
            <OverviewItem
              assignment={assignment}
              history={this.props.history}
            />
          );
        })}
      </Container>
    );
  }
}

export default OverviewView;
