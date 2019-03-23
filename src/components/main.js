import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomepageLayout from "../components/home";
import TypingTest from "../components/typingTest";
import TestBegain from "./testBegain";
import LoginForm from "./login";
import Score from "./scores";
import Learn from "./Learn";
import SignupForm from "./signup";
import Certificate from "./certificate";
class Main extends Component {
  state = { loggedin: false };

  componentDidMount() {
    if (sessionStorage.getItem("status")) {
      let stat = JSON.parse(sessionStorage.getItem("status"));
      this.setState({ loggedin: stat.logg });
    }

    if (sessionStorage.getItem("log")) {
      let stat = JSON.parse(sessionStorage.getItem("log"));
      this.setState({ loggedin: stat.logout });

      sessionStorage.clear();
    }
    if (sessionStorage.getItem("loginFailed")) {

      sessionStorage.clear();
    }
  }

  render() {
    return (
      <div className="main">
      
        <Switch>
          <Route
            path="/HighScore"
            render={() => <Score loggedin={this.state.loggedin} />}
          />
          <Route
            path="/typingtest/test"
            render={() => <TestBegain loggedin={this.state.loggedin} />}
          />
          <Route
            path="/learn"
            render={() => <Learn loggedin={this.state.loggedin} />}
          />
          <Route path="/certification" render={() => <Certificate loggedin={this.state.loggedin}/>} />

       <Route path="/login" render={() => <LoginForm />} />

          <Route path="/signup" render={() => <SignupForm />} />
          <Route
            path="/blogs"
            render={() => <HomepageLayout loggedin={this.state.loggedin} />}
          />
          <Route
          exact
            path="/"
            render={() => <TypingTest loggedin={this.state.loggedin} />}
          />
        </Switch>
      </div>
    );
  }
}
export default Main;
