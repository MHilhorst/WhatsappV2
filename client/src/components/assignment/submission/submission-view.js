import React from 'react';
import { Box, HeaderText, Text, Button, Group } from '../../../styles/style';
import { Row } from 'reactstrap';

class SubmissionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Box border marginTop={15} marginBottom={15} padding={30} color="white">
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0',
            alignItems: 'center'
          }}
        >
          <Group>
            <HeaderText>Submit your feedback</HeaderText>
            <Text>adsad</Text>
          </Group>
          <Button color="light" onClick={this.props.handleSubmit}>
            Submit
          </Button>
        </Row>
      </Box>
    );
  }
}
export default SubmissionView;
