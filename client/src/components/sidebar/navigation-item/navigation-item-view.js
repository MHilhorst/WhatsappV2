import React from "react";
import "./navigation-item.css";
class NavigationItemView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <a href={this.props.url} className="sidebar-navigation-item">
        <img src={this.props.image} width={30} style={{ borderRadius: 5 }} />
        <div className="break"></div>
        <p className="nav-item-sidebar-text">{this.props.brand}</p>
      </a>
    );
  }
}

export default NavigationItemView;
