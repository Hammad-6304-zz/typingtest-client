import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomepageLayout from "../components/home";
import TypingTest from "../components/typingTest";
import TestBegain from "./testBegain";
import TestPrep from "./testprep";
import Score from "./scores";
import Learn from "./Learn";
class Main extends Component {
  state = { loggedin: true };
  render() {
    return (
      <div className="main">
        {/* <HeaderTop /> */}
        {/* <MenuTop /> */}
        {/* <Background />
        <CenteredPopup /> */}

        {/* <HomepageLayout /> */}
        {/* <TypingTest /> */}
        {/* <Score /> */}
        <Switch>
          <Route
            path="/HighScore"
            render={() => <Score loggedin={this.state.loggedin} />}
          />
          <Route path="/typingtest/test" component={TestBegain} />
          <Route
            path="/typingTest"
            render={() => <TypingTest loggedin={this.state.loggedin} />}
          />
          <Route
            path="/learn"
            render={() => <Learn loggedin={this.state.loggedin} />}
          />
          <Route
            exact
            path="/"
            render={() => <HomepageLayout loggedin={this.state.loggedin} />}
          />
        </Switch>
        {/* <TestPrep /> */}
      </div>
    );
  }
}

export default Main;
