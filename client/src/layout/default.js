import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainNavbar from '../components/navbar';
import MainSidebar from '../components/sidebar';
import { Helmet } from 'react-helmet';

class DefaultLayout extends React.Component {
  componentDidMount() {
    console.log('finish loading default layout');
  }
  render() {
    return (
      <>
        <Helmet>
          <style>{`body { background-color:#f7f8fb; } `}</style>
        </Helmet>
        <Container fluid>
          <Row>
            <MainNavbar />
            {this.props.children}
          </Row>
        </Container>
      </>
    );
  }
}

export default DefaultLayout;
