import React, { useState } from "react";
import { ListGroupItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHabits, deleteHabit, updateHabit } from "../actions/habitActions";

function HabitListElement(props) {
  // check if habit was already check today as done
  let lastDoneDate = new Date(
    props.history[props.history.length - 1]
  ).getTime();
  let today = new Date().setHours(0, 0, 0, 0);
  let doneToday = lastDoneDate === today ? true : false;
  let [done, setDone] = useState(doneToday);
  console.log({ done });
  const newDate = () => {
    const dateObj = new Date();
    const month = dateObj.getMonth() + 1; //months from 1-12
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const newdate = month + "/" + day + "/" + year;
    return newdate;
  };
  const onDeleteClick = () => props.deleteHabit(props.id);
  const onCheck = () => {
    const today = newDate();
    if (done === false) {
      setDone(true);
      props.updateHabit(props.id, today);
    }
  };
  return (
    <div>
      <ListGroupItem
        key={props.id}
        className="list-group-item-light d-flex flex-row my-2 py-4"
      >
        <div className="form-check flex-grow-1">
          <input
            className="form-check-input"
            checked={done}
            onChange={onCheck}
            type="checkbox"
          />
          <label
            className="form-check-label h5 primary"
            htmlFor="defaultCheck1"
          >
            {`Did you ${props.habitName} today?`}
          </label>
        </div>
        <Button onClick={onDeleteClick}>Delete Habit</Button>
        <Link to={{ pathname: `/stats`, id: props.id }}>stats</Link>
      </ListGroupItem>
    </div>
  );
}

const mapStateToProps = state => ({
  habits: state.habits
});

export default connect(
  mapStateToProps,
  { getHabits, deleteHabit, updateHabit }
)(HabitListElement);
