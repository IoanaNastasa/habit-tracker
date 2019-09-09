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
    let { history, currentStreak, maxStreak, totalDays } = this.state.habit;
    return (
      <div>
        <Calendar history={history} />
        <div className="container mt-4">
          <div className="row">
            <StatsCard name="Current Streak" value={currentStreak} />
            <StatsCard name="Maximum Streak" value={maxStreak} />
            <StatsCard name="Total" value={totalDays} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  habits: state.habits
});
export default connect(mapStateToProps)(HabitStats);
