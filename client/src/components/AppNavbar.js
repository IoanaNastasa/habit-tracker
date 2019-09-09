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
                <NavLinkRouter class="nav-link" to="/">
                  Home
                </NavLinkRouter>
              </NavItem>
              <NavItem>
                <NavLinkRouter class="nav-link" to="/">
                  Login
                </NavLinkRouter>
              </NavItem>
              <NavItem>
                <NavLinkRouter class="nav-link" to="/">
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
