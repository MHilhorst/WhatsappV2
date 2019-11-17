import React from "react";
import { Container, Row, Col } from "reactstrap";
import MainNavbar from "../components/navbar";
import MainSidebar from "../components/sidebar";
import { Helmet } from "react-helmet";
import "./default.css";
class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("finish loading default layout");
  }
  render() {
    return (
      <Container fluid style={{ padding: 0 }}>
        <Helmet>
          <style>{`body { background-color:#f7f8fb }`}</style>
        </Helmet>
        <Row className="no-gutters">
          <MainSidebar />

          <Col>
            <MainNavbar />
            <Container fluid style={{ marginTop: 15 }}>
              {this.props.children}
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DefaultLayout;
