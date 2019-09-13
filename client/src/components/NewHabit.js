import React from "react";
import PropTypes from "prop-types";
import {
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Form,
  FormGroup,
  Button
} from "reactstrap";

import { connect } from "react-redux";
import { addHabit } from "../actions/habitActions";

class NewHabit extends React.Component {
  state = { habitName: "" };
  static propTypes = {
    addHabits: PropTypes.func
  };
  newDate() {
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1; //months from 1-12
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = year + "/" + month + "/" + day;
    return newdate;
  }
  onChange = e => {
    this.setState({
      habitName: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const newHabit = {
      habitName: this.state.habitName,
      history: [],
      currentStreak: 0,
      maxStreak: 0,
      totalDays: 0
    };
    this.props.addHabit(newHabit);
  };
  render() {
    return (
      <ListGroupItem className="list-group-item-light my-2 py-4">
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">I want to </InputGroupAddon>
              <Input
                onChange={this.onChange}
                placeholder="e.g. read, meditate"
              />
            </InputGroup>
            <Button
              className="btn btn-warning"
              style={{ marginTop: "2rem" }}
              block
            >
              Add habit
            </Button>
          </FormGroup>
        </Form>
      </ListGroupItem>
    );
  }
}
const mapStateToProps = state => {
  return {
    habits: state.habits
  };
};

export default connect(
  mapStateToProps,
  { addHabit }
)(NewHabit);
