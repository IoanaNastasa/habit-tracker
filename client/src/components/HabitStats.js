import React from "react";
import { connect } from "react-redux";
import Calendar from "./Calendar";
import StatsCard from "./StatsCard";

class HabitStats extends React.Component {
  state = {
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth(),
    habit: {}
  };
  componentDidMount() {
    let habit = this.props.habits.habits.find(
      habit => habit._id === this.props.location.id
    );
    this.setState({ habit: habit });
  }
  render() {
    console.log(this.state.habit.history);

    return (
      <div>
        <Calendar history={this.state.habit.history} />
        <StatsCard />
        <StatsCard />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  habits: state.habits
});
export default connect(mapStateToProps)(HabitStats);
