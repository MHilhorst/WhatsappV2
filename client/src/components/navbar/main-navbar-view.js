import React from 'react';

import { Text, NavigationBar, NavigationItem } from '../../styles/style';
import { FaCog } from 'react-icons/fa';

import { logout } from '../../utils/auth';
class MainNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }

  handleDropdown = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  render() {
    return (
      <div className="sticky-top" style={{ width: '100%' }}>
        <NavigationBar>
          <NavigationItem>
            <Text noMargin>Browse</Text>
          </NavigationItem>
          <NavigationItem>
            <Text noMargin>Overview</Text>
          </NavigationItem>
          <NavigationItem style={{ marginRight: 0 }}>
            <FaCog color="#66768a" />
          </NavigationItem>
          <div
            style={{
              padding: '5px 10px'
            }}
          >
            <img
              src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
              width={30}
              height={30}
              style={{
                borderRadius: 15,
                border: '1px solid #e6e7ec'
              }}
            />
          </div>
        </NavigationBar>
        {/* <Navbar className="navigation" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/browse" className="navigation-text">
                  Browse
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">
                  <Text noMargin>{session.email}</Text>
                </NavLink>
              </NavItem>
              <div style={{ marginTop: 6 }}>
                <FaCog color="#66768a" />
              </div>

              <NavItem>
                <NavLink>
                  <img
                    src="https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    width={30}
                    height={30}
                    style={{
                      borderRadius: 15,
                      border: '1px solid #e6e7ec',
                      marginLeft: '1rem'
                    }}
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      </div>
    );
  }
}

export default MainNavbar;
