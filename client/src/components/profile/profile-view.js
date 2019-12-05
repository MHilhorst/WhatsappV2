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
import Select from 'react-select';
import Dropzone from 'react-dropzone';
class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChangeBar: false,
      options: [
        { value: 'javascript', label: 'Javascript' },
        { value: 'python', label: 'Python' },
        { value: 'cplusplus', label: 'C++' },
        { value: 'react-js', label: 'React JS' },
        { value: 'java', label: 'Java' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'r', label: 'R' },
        { value: 'node-js', label: 'Node JS' },
        { value: 'csharp', label: 'C#' }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ size: 4 }}>
            <Box color="white" border marginTop={15} padding={30}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onMouseOver={() => this.setState({ showChangeBar: true })}
                onMouseLeave={() => this.setState({ showChangeBar: false })}
              >
                {this.state.showChangeBar && (
                  <Dropzone onDrop={this.props.handleFileUpload}>
                    {({ getRootProps, getInputProps }) => (
                      <div
                        {...getRootProps()}
                        style={{
                          position: 'absolute',
                          top: 62,
                          width: '8rem',
                          height: '8rem',
                          borderRadius: '5rem',
                          backgroundColor: '#66768a',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          opacity: 0.6
                        }}
                      >
                        <input {...getInputProps()} />

                        <Text noMargin style={{ color: 'white', opacity: 1 }}>
                          Upload
                        </Text>
                      </div>
                    )}
                  </Dropzone>
                )}
                <img
                  src={require('../../assets/images/profile-picture.png')}
                  style={{
                    width: '10rem',
                    height: '10rem',
                    borderRadius: '5rem'
                  }}
                />
              </div>
            </Box>
          </Col>
          <Col lg={{ size: 8 }}>
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
                  <Select
                    defaultValue={this.props.user.programming_languages || []}
                    isMulti
                    name="colors"
                    options={this.state.options}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.props.handleSelectPL}
                  />
                  <Group pt={1}>
                    <Button color="light" onClick={this.props.handleSaveSkills}>
                      Save skills
                    </Button>
                  </Group>
                </Col>
              </Row>
            </Box>
          </Col>
        </Row>
      </Container>
    );
  }
}

ProfileView.defaultProps = {
  name: 'Michael',
  email: 'michaeljianghilhorst@gmail.com'
};

export default ProfileView;
