import React from "react";
import HabitsList from "./HabitsList";
import NewHabit from "./NewHabit";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <HabitsList />
      </div>
    );
  }
}

export default Homepage;
