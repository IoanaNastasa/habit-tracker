import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppNavBar from "./components/AppNavbar";
import Homepage from "./components/Homepage";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppNavBar />
          <Route exact path="/" component={Homepage} />
        </Router>
      </Provider>
    );
  }
}

export default App;
