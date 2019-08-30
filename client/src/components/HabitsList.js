import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { getHabits, deleteHabit, updateHabit } from "../actions/habitActions";
import PropTypes from "prop-types";
import NewHabit from "./NewHabit";

class HabitsList extends React.Component {
  static propTypes = {
    getHabits: PropTypes.func.isRequired,
    deleteHabit: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getHabits();
  }
  newDate() {
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1; //months from 1-12
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = month + "/" + day + "/" + year;
    return newdate;
  }
  onDeleteClick = _id => {
    this.props.deleteHabit(_id);
  };
  onDoneClick = _id => {
    console.log(`click id: ${_id}`);
    const today = this.newDate();
    console.log(today);
    this.props.updateHabit(_id, today);
  };
  render() {
    const { habits } = this.props.habits;
    return (
      <div>
        <ListGroup className="my-5">
          {habits.map(({ habitName, _id }) => (
            <ListGroupItem
              key={_id}
              className="list-group-item-light d-flex flex-row my-2 py-4"
            >
              <div className="form-check flex-grow-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label
                  className="form-check-label h5 primary"
                  htmlFor="defaultCheck1"
                >
                  {`Did you ${habitName} today?`}
                </label>
              </div>
              <Button onClick={this.onDeleteClick.bind(this, _id)}>
                Delete Habit
              </Button>
              <Button onClick={this.onDoneClick.bind(this, _id)}>DONE</Button>
              <Link to={{ pathname: `/calendar`, id: _id }}>stats</Link>
            </ListGroupItem>
          ))}
          <NewHabit />
        </ListGroup>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  habits: state.habits
});

export default connect(
  mapStateToProps,
  { getHabits, deleteHabit, updateHabit }
)(HabitsList);
