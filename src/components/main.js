import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomepageLayout from "../components/home";
import TypingTest from "../components/typingTest";
import TestBegain from "./testBegain";
import LoginForm from "./login";
import Score from "./scores";
import Learn from "./Learn";
import SignupForm from "./signup";
class Main extends Component {
  state = { loggedin: false };

  componentDidMount() {

    if (sessionStorage.getItem("status")) {
      let stat = JSON.parse(sessionStorage.getItem("status"));
      console.log(stat);
      this.setState({ loggedin: stat.logg });
    }
    // console.log(this.props.loginData)
    // this.setState({loggedin:this.props.loginData.logg})

    if (sessionStorage.getItem("log")) {
      let stat = JSON.parse(sessionStorage.getItem("log"));
      console.log("not Loggedin");
      this.setState({ loggedin: stat.logout });

      sessionStorage.clear();
    }
    if (sessionStorage.getItem("loginFailed")) {
      console.log("authentication failed");
      // this.setState({loggedin:stat.logout})

      sessionStorage.clear();
    }
  }

  render() {
    console.log(this.state);
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
          <Route
            path="/typingtest/test"
            render={() => <TestBegain loggedin={this.state.loggedin} />}
          />
          <Route
            path="/typingTest"
            render={() => <TypingTest loggedin={this.state.loggedin} />}
          />
          <Route
            path="/learn"
            render={() => <Learn loggedin={this.state.loggedin} />}
          />
          <Route
            path="/login"
            render={() => <LoginForm  />}
          />

          {/* {this.state.loggedin == false ? (
           <Route path="/login" render={() => <LoginForm  />} />):<Redirect to='/typinTestsdlkfjsd' />} */}

          <Route path="/signup" render={() => <SignupForm />} />
          <Route
            exact
            path="/"
            render={() => <HomepageLayout loggedin={this.state.loggedin} />}
          />
        </Switch>
      </div>
    );
  }
}
// export default connect(mapStateToProps)(Main);
export default Main;
