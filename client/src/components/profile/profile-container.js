import React from 'react';
import ProfileView from './profile-view';
import { config } from '../../config';
class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
      userPL: []
    };
    this.handleSaveSkills = this.handleSaveSkills.bind(this);
    this.handleSelectPL = this.handleSelectPL.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  handleSaveSkills = () => {
    fetch(`${config.host}/api/users/me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.props.auth}`
      },
      body: JSON.stringify({ programmingLanguages: this.state.userPL })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ saved_PL: true });
      });
  };

  handleSelectPL = e => {
    this.setState({ userPL: e });
  };
  handleFileUpload(file) {
    const formData = new FormData();
    formData.append('image', file);

    fetch(`${config.host}/api/users/me/avatar`, {
      method: 'POST',
      headers: {
        Authorization: `${this.props.auth}`
      },
      body: formData
    }).then(res =>
      res.json().then(data => {
        console.log(data);
      })
    );
  }

  componentDidMount() {
    fetch(`${config.host}/api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${this.props.auth}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ user: data, loading: false });
      });
  }

  render() {
    if (this.state.loading) return null;
    return (
      <ProfileView
        user={this.state.user}
        handleSelectPL={this.handleSelectPL}
        handleSaveSkills={this.handleSaveSkills}
        handleFileUpload={this.handleFileUpload}
      />
    );
  }
}
export default ProfileContainer;
