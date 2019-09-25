import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import BuildingBlocks from "../assets/BuildingBlocks.svg";
import { render } from "react-dom";
import ReactSVG from "react-svg";

import PropTypes from "prop-types";

function Register(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="login-container ml-5 mt-5 col-sm-9 col-md">
          <h1 className="mb-5">Sign Up</h1>
          <Form>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                name="password"
                required
              />
            </FormGroup>
            <Button>Sign Up</Button>
          </Form>
        </div>
        <ReactSVG
          src={BuildingBlocks}
          beforeInjection={svg => {
            svg.classList.add("d-none");
            svg.classList.add("d-md-block");
            svg.classList.add("img-fluid");
          }}
          className="col-sm-7 mt-5 mr-5"
        />
      </div>
      {/* end of row */}
    </div>
  );
}

Register.propTypes = {};

export default Register;
