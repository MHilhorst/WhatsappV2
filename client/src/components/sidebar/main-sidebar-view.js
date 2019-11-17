import React from "react";
import "./sidebar.css";
import { Col, Row, Navbar, NavbarBrand } from "reactstrap";
import { FaAtom } from "react-icons/fa";
import NavigationItem from "./navigation-item";
class MainSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <Col
      //   lg={{ size: 2 }}
      //   md={{ size: 2 }}
      //   style={{ height: "100vh", backgroundColor: "#111322", paddingLeft: 15 }}
      //   className="sticky-top sidebar"
      // >
      <div className="sidebar sticky-top">
        <div className="sidebar-header">
          {/* <p style={{ color: "white", margin: 0 }}>Alertje</p> */}
          <img src={require("../../assets/images/logowhite.png")} width={42} />
        </div>
        <NavigationItem
          image="http://is5.mzstatic.com/image/thumb/Purple118/v4/ff/f6/81/fff68100-dfb5-82c9-ff23-3ffa50b41a05/source/1200x630bb.jpg"
          brand="Bijenkorf"
          url="/bijenkorf"
        />
        <NavigationItem
          image="https://media.licdn.com/dms/image/C4E0BAQE-cI_u4JBVKg/company-logo_200_200/0?e=2159024400&v=beta&t=T2yjqu2twgX33wVlRU08Ln8qZTAVi6RaSmI14KiII54"
          brand="Ticketswap"
          url="/ticketswap"
        />
      </div>
    );
  }
}
export default MainSidebar;
