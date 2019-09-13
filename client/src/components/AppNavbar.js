import React from "react";
import { Navbar, Nav, NavItem, Container } from "reactstrap";
import { NavLink as NavLinkRouter } from "react-router-dom";
class AppNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <Container>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLinkRouter className="nav-link" to="/">
                  Home
                </NavLinkRouter>
              </NavItem>
              <NavItem>
                <NavLinkRouter className="nav-link" to="/register">
                  Register
                </NavLinkRouter>
              </NavItem>
              <NavItem>
                <NavLinkRouter className="nav-link" to="/">
                  Logout
                </NavLinkRouter>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
