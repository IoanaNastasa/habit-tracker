import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppNavBar from "./components/AppNavbar";
import Homepage from "./components/Homepage";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import HabitStats from "./components/HabitStats";
import Register from "./components/Register";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppNavBar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/stats" component={HabitStats} />
          <Route exact path="/register" component={Register} />
        </Router>
      </Provider>
    );
  }
}

export default App;
