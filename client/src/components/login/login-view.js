import React from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Label,
  Input,
  Button
} from "reactstrap";
import "./login.css";
import { config } from "../../config";
import Cookies from "js-cookie";
class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin() {
    fetch(`${config.host}/api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        const { token } = data;
        Cookies.set("token", token);
        this.props.history.push("/dashboard");
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
            <div className="login-form">
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
                  <Button color="primary" onClick={this.handleLogin}>
                    Login
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

export default LoginView;
