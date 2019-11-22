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
        {this.props.icon}
        <div className="break"></div>
        <p className="nav-item-sidebar-text">{this.props.step}</p>
      </a>
    );
  }
}

export default NavigationItemView;
