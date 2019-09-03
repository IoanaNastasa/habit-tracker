import React from "react";
import { Navbar, Nav, NavItem, NavLink, Container } from "reactstrap";
import { NavLink as NavLinkRouter } from "react-router-dom";
class AppNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <Container>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLinkRouter to="/">Home</NavLinkRouter>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
