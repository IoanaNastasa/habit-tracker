import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="info" dark expand="md">
          <Container>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Register</NavLink>
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
