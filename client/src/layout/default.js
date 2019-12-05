import React from 'react';
import { Container, Row } from 'reactstrap';
import MainNavbar from '../components/navbar';
import { Helmet } from 'react-helmet';

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Helmet>
          <style>{`body { background-color:#f7f8fb; } `}</style>
        </Helmet>
        <Container fluid>
          <Row>
            <MainNavbar session={this.props.session} />
            {this.props.children}
          </Row>
        </Container>
      </>
    );
  }
}

export default DefaultLayout;
