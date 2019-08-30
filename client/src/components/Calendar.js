import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { Button, Table } from "reactstrap";

class Calendar extends Component {
  state = {
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth()
  };
  componentDidMount() {
    let habit = this.props.habits.habits.find(
      habit => habit._id === this.props.location.id
    );
    console.log(habit);
  }
  // on button click changes month or year
  prevMonth = () => {
    if (this.state.calendarMonth === 0) {
      this.setState({ calendarMonth: 11 });
    } else {
      this.setState({ calendarMonth: this.state.calendarMonth - 1 });
    }
  };
  nextMonth = () => {
    if (this.state.calendarMonth === 11) {
      this.setState({ calendarMonth: 0 });
    } else {
      this.setState({ calendarMonth: this.state.calendarMonth + 1 });
    }
  };
  prevYear = () => {
    this.setState({ calendarYear: this.state.calendarYear - 1 });
  };
  nextYear = () => {
    this.setState({ calendarYear: this.state.calendarYear + 1 });
  };
  // method for showing days in table cells
  calendarDays() {
    // when firstday = 0(Sunday) change to 1 ---> rendered calendar is Mon-Sunday
    let firstDay =
      new Date(this.state.calendarYear, this.state.calendarMonth).getDay() == 0
        ? 7
        : new Date(this.state.calendarYear, this.state.calendarMonth).getDay();
    let daysInMonth = new Date(
      this.state.calendarYear,
      this.state.calendarMonth + 1,
      0
    ).getDate();
    let currentDays = daysInMonth;
    let firstRow = 0;
    let dates = [];
    while (currentDays > 0) {
      let col = [];

      for (let i = 1; i <= 7; i++) {
        // start showing dates on first day of the month or
        // if first row done show days until last day of month in the regular way
        if (
          (firstRow === 0 && firstDay <= i) ||
          (currentDays > 0 && firstRow === 1)
        ) {
          col.push(
            <td className="text-center">{daysInMonth - currentDays + 1}</td>
          );
          currentDays--;
        }
        // days before firstday and last day of month empty cells
        else if ((firstRow === 0 && firstDay > i) || currentDays === 0) {
          col.push(<td></td>);
        }
      }
      let row = <tr>{col}</tr>;
      dates.push(row);
      firstRow = 1;
    }
    return dates;
  }

  render() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <div>
        <div id="month-year">
          <div id="month" className="d-flex flex-row">
            <Button color="link" onClick={this.prevMonth}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <h4>{months[this.state.calendarMonth]}</h4>
            <Button color="link" onClick={this.nextMonth}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
          <div id="year" className="d-flex flex-row">
            <Button color="link" onClick={this.prevYear}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
            <h6>{this.state.calendarYear}</h6>
            <Button color="link" onClick={this.nextYear}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
        <Table id="calendar-container">
          <thead>
            <tr>
              <th className="text-center">Mon</th>
              <th className="text-center">Tue</th>
              <th className="text-center">Wed</th>
              <th className="text-center">Thu</th>
              <th className="text-center">Fri</th>
              <th className="text-center">Sat</th>
              <th className="text-center">Sun</th>
            </tr>
          </thead>
          <tbody id="days">{this.calendarDays()}</tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  habits: state.habits
});
export default connect(mapStateToProps)(Calendar);
