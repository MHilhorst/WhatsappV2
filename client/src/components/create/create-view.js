import React from 'react';
import { Container } from 'reactstrap';
import {
  Box,
  Button,
  Input,
  Label,
  Divider,
  HeaderText,
  Text,
  TextArea,
  Group,
  DropZoneStyle
} from '../../styles/style';
import { Col, Row } from 'reactstrap';
import Dropzone from 'react-dropzone';

class CreateView extends React.Component {
  render() {
    return (
      <Container>
        <Box border marginTop={15} padding={30} color="white">
          <Row>
            <Col>
              <HeaderText>Create new assignment</HeaderText>
              <Text subtext>Make a new assignment</Text>
              <Divider mt={1} mb={1} />
              <Group pb={1}>
                <Label>Title</Label>
                <Input
                  placeholder="Hello"
                  fullWidth
                  onChange={this.props.handleTitleChange}
                />
              </Group>
              <Group pb={1}>
                <Label>Description</Label>
                <Input
                  placeholder="Give a description of your assignment"
                  fullWidth
                  onChange={this.props.handleDescriptionChange}
                />
              </Group>
              <Divider mt={1} mb={1} />
              <Group pb={1}>
                <Label>Programming language</Label>
                <Input
                  placeholder="Select programming languages used"
                  fullWidth
                  onChange={this.props.handleProgrammingLanguage}
                />
              </Group>
              <Divider mt={1} mb={1} />
              <Group>
                <Label>Problem description</Label>
                <TextArea
                  fullWidth
                  onChange={this.props.handleProblemDescription}
                />
              </Group>
            </Col>
            <Col>
              <Dropzone onDrop={this.props.handleFileUpload}>
                {({ getRootProps, getInputProps }) => (
                  <DropZoneStyle {...getRootProps()}>
                    <input {...getInputProps()} />
                    {this.props.files.map(file => {
                      return (
                        <Text noMargin key={file.name}>
                          {file.name}
                        </Text>
                      );
                    })}
                    {this.props.files.length < 1 && (
                      <Text noMargin>Drop your files here</Text>
                    )}
                  </DropZoneStyle>
                )}
              </Dropzone>
            </Col>
          </Row>
          <Group pt={2}>
            <Button color="light" onClick={this.props.handleCreate}>
              Create
            </Button>
          </Group>
        </Box>
      </Container>
    );
  }
}

export default CreateView;
