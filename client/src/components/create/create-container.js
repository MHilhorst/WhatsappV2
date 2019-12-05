import React from 'react';
import CreateView from './create-view';
import { config } from '../../config';
import { getJWT } from '../../utils/getJWT';
class CreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      fileId: ''
    };
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleProgrammingLanguage = this.handleProgrammingLanguage.bind(this);
    this.handleProblemDecription = this.handleProblemDecription.bind(this);
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  handleProgrammingLanguage = e => {
    this.setState({ programmingLanguage: e });
  };
  handleProblemDecription = e => {
    this.setState({ problemDescription: e.target.value });
  };

  handleFileUpload(file) {
    this.setState({ files: file });
    const formData = new FormData();
    formData.append('file', this.state.files[0], 'text.py');
    fetch(`${config.host}/api/assignment/upload`, {
      method: 'POST',
      body: formData
    }).then(res =>
      res.json().then(data => {
        console.log(data.file);
        this.setState({ fileId: data.file });
      })
    );
  }

  componentDidMount() {
    const jwt = getJWT();
    this.setState({ jwt: jwt });
  }
  handleCreate() {
    console.log(this.state.files[0]);

    fetch(`${config.host}/api/assignment/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.state.jwt}`
      },
      body: JSON.stringify({
        fileId: this.state.fileId,
        description: this.state.description,
        title: this.state.title,
        problemDescription: this.state.problemDescription,
        programmingLanguage: this.state.programmingLanguage,
        filename: this.state.files[0].name,
        filetype: this.state.files[0].type
      })
    });
  }

  render() {
    return (
      <CreateView
        handleFileUpload={this.handleFileUpload}
        files={this.state.files}
        handleCreate={this.handleCreate}
        handleDescriptionChange={this.handleDescriptionChange}
        handleProblemDecription={this.handleProblemDecription}
        handleTitleChange={this.handleTitleChange}
        handleProgrammingLanguage={this.handleProgrammingLanguage}
      />
    );
  }
}

export default CreateContainer;
