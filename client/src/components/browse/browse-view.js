import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Listing from '../listing';
import { Box } from '../../styles/style';
class BrowseView extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row style={{ marginLeft: 0, marginRight: 0 }}>
          <Col lg={{ size: 2, offset: 2 }}>
            <Box
              border
              padding={30}
              color="white"
              style={{
                position: 'sticky',
                top: 56.27 + 15
              }}
            >
              <p>asdsad</p>
            </Box>
          </Col>
          <Col lg={{ size: 6 }}>
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BrowseView;
