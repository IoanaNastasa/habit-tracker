import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChecks } from "@fortawesome/free-solid-svg-icons";

import { getHabits, deleteHabit, updateHabit } from "../actions/habitActions";
import PropTypes from "prop-types";
import NewHabit from "./NewHabit";
import HabitListElement from "./HabitListElement";

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
          {habits.map(({ habitName, _id, history }) => (
            <HabitListElement
              key={_id}
              habitName={habitName}
              id={_id}
              history={history}
            />
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
