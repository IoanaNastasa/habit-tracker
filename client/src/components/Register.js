import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import BuildingBlocks from "../assets/BuildingBlocks.svg";
import { render } from "react-dom";
import ReactSVG from "react-svg";

import PropTypes from "prop-types";

function Register(props) {
  return (
    <div>
      <div className="login-container ml-5 mt-5">
        <h1 className="mb-3">Sign Up</h1>
        <Form>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              style={{ width: "30%" }}
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              style={{ width: "30%" }}
              type="password"
              placeholder="Enter password"
              name="password"
              required
            />
          </FormGroup>
          <Button>Sign Up</Button>
        </Form>
      </div>
      <ReactSVG className="d-sm-none d-md-block" src={BuildingBlocks} />
    </div>
  );
}

Register.propTypes = {};

export default Register;
