import React from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button
} from 'reactstrap';
import './register.css';
import { config } from '../../config';

class RegisterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleRegister() {
    fetch(`${config.host}/api/auth/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.props.history.push('/login');
        // const { token } = data;
        // Cookies.set("token", token);
        // this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="4">
            <div className="register-form">
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    onChange={this.handleEmailChange}
                  />
                  <Label for="exampleEmail">Password</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="with a placeholder"
                    onChange={this.handlePasswordChange}
                  />
                </FormGroup>
              </Form>
              <Row>
                <Col>
                  <Button color="primary" onClick={this.handleRegister}>
                    Register
                  </Button>
                  <Button color="link">Forgot password?</Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegisterView;
