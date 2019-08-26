import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getHabits, deleteHabit } from "../actions/habitActions";
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
  onDeleteClick = _id => {
    console.log("click");
    this.props.deleteHabit(_id);
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
              <a href="#" role="button">
                stats
              </a>
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
  { getHabits, deleteHabit }
)(HabitsList);
