import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { Button, Table } from "reactstrap";

export default class Calendar extends Component {
  state = {
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth()
  };
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
          <tbody id="days"></tbody>
        </Table>
      </div>
    );
  }
}
