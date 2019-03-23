import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";
import DimmerResult from "../subComponents/dimmer";
import checkWord from "../functions/checkword";
import submitWord from "../functions/submit";
import isTimer from "../functions/timer";
import calculateWPM from "../functions/calculateWPM";
import start from "../functions/start";
import { wordList } from "../functions/wordlist";

import {
  Button,
  Container,
  Grid,
  Dropdown,
  Image,
  Header,
  Segment,
  Icon,
  Menu
} from "semantic-ui-react";

let wordData = {
  seconds: 5,
  correct: 0,
  incorrect: 0,
  total: 0,
  typed: 0
};

function clearLine(target) {
  let wordSection = target;
  let current = document.getElementsByClassName("current-word")[0];
  let previous = current.previousSibling;
  let children = document.querySelectorAll(".correct-word-c, .incorrect-word-c")
    .length;

  if (current.offsetTop > previous.offsetTop) {
    for (let i = 0; i < children; i++) {
      wordSection.removeChild(wordSection.firstChild);
    }
  }
}

class TestPrep extends React.Component {
  state = {
    correct: "",
    timer: "1:00",
    accuracy: "",
    total: "",
    typed: "",
    incorrect: "",
    wpm: "",
    dim: false,
    disp: "",
    active: true
  };

  sendServer = data => {
    let date = new Date();
    let day = date.toLocaleDateString();
    let time = date.toLocaleTimeString();
    let userData;
    if (sessionStorage.getItem("status")) {
      let data = JSON.parse(sessionStorage.getItem("status"));
      userData = data.userData;
    } else {
      userData = { firstName: "", lastName: "" };
    }
    var options = {
      method: "POST",
      body: JSON.stringify({
        dataname: userData.firstName + " " + userData.lastName,
        wpm: data.wpm,
        accuracy: data.accuracy,
        date: day,
        time: time
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:8000/dataSubmit", options)
      .then(res => res.text())
      .then(message => console.log())
      .catch(error => console.log());
  };

  sub = data => {
    this.setState({
      correct: data.correctWord,
      accuracy: data.accuracy,
      typed: data.typed,
      incorrect: data.incorrectWord,
      wpm: data.wpm,
      total: data.total,
      dim: data.dim,
      disp: data.disp
    });
  };
  settime = time => {
    this.setState({ timer: time });
  };

  typingTest = e => {
    e = e || window.event;
    let kcode = e.keyCode;
    let word = this.textbox;

    if (word.value.match(/^\s/g)) {
      word.value = "";
    } else {
      if (isTimer(wordData.seconds, this.state.timer, this.settime)) {
        checkWord(word);
        if (kcode === 32) {
          submitWord(word, wordData);
          clearLine(this.target);
          this.textbox.value = "";
        }
        wordData.typed += 1;
      } else {
        calculateWPM(
          wordData,
          this.result,
          this.sub,
          this.textbox,
          this.target
        );

      }
    }
  };

  active = () => {
    let parseData = JSON.parse(sessionStorage.getItem("status"));
    let status = parseData.logg;
    if (status === true) {
      this.setState({ active: false });
    }
  };
  componentDidMount() {
    if (sessionStorage.getItem("status")) {
      this.setState({ active: false });
    }

    start(this.target, wordList);

   
  }

  render() {
    let userData;
    if (sessionStorage.getItem("status")) {
      let data = JSON.parse(sessionStorage.getItem("status"));
      userData = data.userData;
    } else {
      userData = { firstName: "", lastName: "" };
    }
    return (
      <div>
        <Menu
          style={{ margin: "0px", padding: "0px", background: "#C0C0C0" }}
          size="large"
        >
          <Container>
            <Link to="/">
              <Menu.Item>
                <Icon
                  name="arrow circle left"
                  size="big"
                  color="violet"
                  style={{ marginTop: "2px" }}
                />
                back
              </Menu.Item>
            </Link>

            {this.props.loggedin === true ? (
              <Menu.Item position="right">
                <Image avatar spaced="right" src="/images/avatar.jpg" />
                <span style={{ fontWeight: "bold" }}>
                  {userData.firstName} {userData.lastName}
                </span>
                <Dropdown>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.logout} text="Logout" />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            ) : (
              <Menu.Item position="right">
                <Link to="/login">
                  <Button>Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button style={{ marginLeft: "0.5em" }}>Sign Up</Button>
                </Link>
              </Menu.Item>
            )}
          </Container>
        </Menu>

        {this.state.dim === true ? (
          <Segment vertical textAlign="center" style={{ padding: "5%" }}>
            <Header as="h1">Test Completed</Header>
            <Header as="h1">Thanks!</Header>
            <DimmerResult
              server={() => this.sendServer(this.state)}
              data={this.state}
            />
          </Segment>
        ) : null}

        <div ref={ref => (this.wholeSeg = ref)}>
          {this.state.active === true ? (
            <Segment vertical style={{ fontSize: "40px", textAlign: "center" }}>
              Login Required
            </Segment>
          ) : null}
          <Segment
            disabled={this.state.active}
            vertical
            style={{ marginTop: "3%", display: this.state.disp }}
          >
            <Grid columns="equal" stackable>
              <Grid.Column width="3" />
              <Grid.Column>
                <div
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    fontSize: "1.7em"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      className="targetdiv"
                      style={{
                        padding: "3%",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        userSelect: "none",
                        maxWidth: "82%",
                        maxHeight: "39vh",
                        overflow: "hidden"
                      }}
                      ref={ref => (this.target = ref)}
                    />
                    <div
                      style={{
                        paddingLeft: "3% ",
                        marginLeft: "2%",
                        color: "red"
                      }}
                    >
                      <div style={{ marginBottom: "20px" }}>
                        <Icon name="clock outline" />{" "}
                        <span
                          ref={ref => (this.speedtarget = ref)}
                          style={{ fontSize: "0.7em" }}
                        />
                        <div
                          ref={ref => (this.timer = ref)}
                          style={{ marginTop: "20px" }}
                        >
                          {this.state.timer}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#C0C0C0",
                      padding: "4% ",
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <textarea
                      disabled={this.state.active}
                      ref={ref => (this.textbox = ref)}
                      onKeyUp={e => this.typingTest(e)}
                      style={{
                        resize: "none",
                        minWidth: "80%",
                        height: "120px"
                      }}
                    />
                    <span style={{ padding: "2%" }}>Cheers Up</span>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width="3" />
            </Grid>
          </Segment>
        </div>

        <Footer />
      </div>
    );
  }
}
export default TestPrep;
