import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import {
  Box,
  HeaderText,
  Divider,
  LabelSmall,
  Text,
  Button,
  Group
} from '../../styles/style';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Box color="white" border marginTop={15} padding={30}>
          <HeaderText>Account information</HeaderText>
          <Divider mt={2} mb={1} />
          <Row>
            <Col>
              <Group pb={1}>
                <LabelSmall>Name</LabelSmall>
                <Text>{this.props.name}</Text>
              </Group>
              <Group pb={1}>
                <LabelSmall>Email</LabelSmall>
                <Text>{this.props.email}</Text>
              </Group>
            </Col>
            <Col>
              <Group pb={1}>
                <LabelSmall>Language</LabelSmall>
                <Text>English</Text>
              </Group>
            </Col>
          </Row>
          <Button color="light">Change information</Button>
        </Box>
        <Box color="white" border marginTop={15} padding={30}>
          <HeaderText>Skills</HeaderText>
          <Divider mt={2} mb={1} />
          <Row>
            <Col>
              <Text>Show Skills</Text>
            </Col>
          </Row>
        </Box>
      </Container>
    );
  }
}

ProfileView.defaultProps = {
  name: 'Michael',
  email: 'michaeljianghilhorst@gmail.com'
};

export default ProfileView;
