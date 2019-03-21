import React from "react";
import { ResponsiveContainer } from "../subComponents/responsiveCon";
import { BlogSegment } from "../subComponents/blogSegment";
import Footer from "./footer";
import { Link } from "react-router-dom";
import DimmerResult from "../subComponents/dimmer";
// functions
import shuffle from "../functions/shuffle";
import checkWord from "../functions/checkword";
import submitWord from "../functions/submit";
import isTimer from "../functions/timer";
import calculateWPM from "../functions/calculateWPM";
import start from "../functions/start";
import {wordList} from '../functions/wordlist'

import {
  Button,
  Container,
  Divider,
  Grid,
  Dropdown,
  Image,
  List,
  Segment,
  Icon,
  Menu,
  Dimmer
} from "semantic-ui-react";

// let wordList = para.split(" ")

let wordData = {
  seconds: 60,
  correct: 0,
  incorrect: 0,
  total: 0,
  typed: 0
};

function clearLine(target) {
  // remove past words once you get to the next line
  let wordSection = target;
  let current = document.getElementsByClassName("current-word")[0]; // second line (first word)
  let previous = current.previousSibling; // first line (last word)
  let children = document.querySelectorAll(".correct-word-c, .incorrect-word-c")
    .length;

  // <span>'s on the next line have a greater offsetTop value
  // than those on the top line.
  // Remove words until the first word on the second line
  // is the fistChild of word-section.
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
    active : true
  };


  sendServer=(data)=>{
    let userData ;
    if(sessionStorage.getItem("status")){

      let data = JSON.parse(sessionStorage.getItem("status"));
       userData = data.userData;
      console.log("am from navbar",userData)
    }
    else{
       userData = {firstName:"",lastName:""}
    }
    console.log("sendserver",this.state)
    var options = {
      method: "POST",
      body: JSON.stringify({
        dataname: userData.firstName + " "+userData.lastName,
        wpm: data.wpm,
        accuracy: data.accuracy,
        
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:8000/dataSubmit", options)
      .then(res => res.text())
      .then(message => console.log(message))
      .catch(error => console.log(error));
  }


 

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
    // Char:        Key Code:
    // <space>      32
    // <backspace>  8
    // <shift>      16
    // [A-Z]        65-90
    // [' "]        222

    // Get key code of current key pressed.
    e = e || window.event;
    let kcode = e.keyCode;
    let word = this.textbox;

    // check if empty (starts with space)
    if (word.value.match(/^\s/g)) {
      word.value = "";
    } else {
      // Only score when timer is on.
      if (isTimer(wordData.seconds, this.state.timer, this.settime)) {
        checkWord(word); // checks for typing errors while you type
        // <space> submits words
        if (kcode == 32) {
          console.log("spaceevent");
          submitWord(word, wordData); // keep track of correct / incorrect words
          clearLine(this.target);
          this.textbox.value = ""; // clear typebox after each word
        }
        wordData.typed += 1; // count each valid character typed
      } else {
        // Display typing test results.
        calculateWPM(
          wordData,
          this.result,
          this.sub,
          this.textbox,
          this.target
          );
          // this.sendServer(this.state)
          
          console.log(this.state)
      }
    }
    console.log(wordData);
  };

  // start = () => {
  //   //     console.log(this.sibling)
  //   //    this.sibling.nextSibling.classList.add("hello")
  //   //     console.log(this.sibling.nextSibling)
  //   //     let current = document.getElementsByClassName("hello")[0]
  //   //     console.log("current node",current);
  //   //     console.log(current.nextSibling)

  //   // clear existing word-section
  //   let wordSection = this.target;
  //   wordSection.innerHTML = "";

  //   for (let i = 350; i > 0; i--) {
  //     let words = shuffle(wordList);
  //     let wordSpan = `<span>${words[i]}</span>`;
  //     wordSection.innerHTML += wordSpan;
  //   }
  //   // mark first word as current-word
  //   wordSection.firstChild.classList.add("current-word");
  //   console.log(wordSection.firstChild);

  //   // mark last word with magic-box
  //   // let magicBox = document.createElement("DIV");
  //   // magicBox.classList.add("magic-box");
  //   // wordSection.appendChild(magicBox);
  // };
  active = ()=>{
    let parseData = JSON.parse(sessionStorage.getItem("status"));
    let status = parseData.logg;
    if(status == true){

      this.setState({active:false})
    }
  }
  componentDidMount() {
    if(sessionStorage.getItem("status")){
      
      this.setState({active:false})
    }


    


    start(this.target, wordList);

    var options = {
      method: "POST",
      body: "",
      headers: {
        "Content-Type": "application/json"
      }
    };
    // fetch("http://localhost:8000/authCheck", options)
    //   .then(res => res.text())
    //   .then(data => {
    //     console.log(data);
    //     if(data.active == true){
    //       this.active()
    //     }

    //   })
    //   .catch(error => console.log(error));



  };

  render() {
    // if(localStorage.getItem("status")){
    //   this.active()
    // }
    return (
      <div>
        <Menu
          style={{ margin: "0px", padding: "0px", background: "#C0C0C0" }}
          size="large"
        >
          <Container>
            <Link to="/">
              <Menu.Item>Home</Menu.Item>
            </Link>

            <Link to="/typingtest">
              <Menu.Item active>Typing Test</Menu.Item>
            </Link>
            <Link to="/learn">
              <Menu.Item>Learn</Menu.Item>
            </Link>

            <Link to="/HighScore">
              <Menu.Item>High Scores</Menu.Item>
            </Link>

            {this.props.loggedin === true ? (
                <Menu.Item position="right">
                  <Image avatar spaced="right" src="/images/girl.png" />
                  <span style={{fontWeight:'bold'}}>Hammad Ali</span>
                  <Dropdown>
                    <Dropdown.Menu>
                      <Dropdown.Item text="New" />
                      <Dropdown.Item text="Open..." description="ctrl + o" />
                      <Dropdown.Item text="Save as..." description="ctrl + s" />
                      <Dropdown.Item text="Rename" description="ctrl + r" />
                      <Dropdown.Item text="Make a copy" />
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={this.logout} text="Logout" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              ) : (
                <Menu.Item position="right">
                  <Link to="/login"><Button >Log in</Button></Link>
                 <Link to="/signup">
                  <Button
                    
                    style={{ marginLeft: "0.5em" }}
                    >
                    Sign Up
                  </Button>
                    </Link>
                </Menu.Item>
              )}
          </Container>
        </Menu>

        {this.state.dim === true ? ( 
          <Segment vertical style={{ padding: "5%" }}>
            <DimmerResult server={() =>this.sendServer(this.state)} data={this.state} />
          </Segment>
        ) : null}

        <div ref={ref => (this.wholeSeg = ref)}>
        {this.state.active == true ?<Segment vertical style={{fontSize:"40px",textAlign:'center'}}>Please login for take test</Segment>:null}
          <Segment
          disabled={this.state.active}
            vertical
            style={{ marginTop: "3%", display: this.state.disp }}
          >
            <Grid columns="equal" stackable>
              <Grid.Column width="3" />
              {/* center grid column for typnig container */}
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
                    >
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    sit, qui beatae, minus tenetur nihil officia nisi officiis
                    laborum voluptate ut pariatur! Porro, quidem quia sapiente
                    omnis explicabo, sint tenetur veritatis atque in beatae
                    rerum laudantium. Facere expedita eum accusantium deserunt
                    nihil mollitia voluptatem voluptate minima fugit laboriosam,
                    explicabo, sint tenetur veritatis atque in beatae rerum */}
                    </div>
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
                        height: "120px",
                        
                      }}
                    />
                    <span style={{ padding: "2%" }}>
                      <Button color="youtube" 
                      disabled={this.state.active}
                      
                      onClick={this.reset}>
                        <Icon name="redo" />
                        Restart
                      </Button>
                    </span>
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

///////////////////////////////

// function checkWord(word) {
//     let wlen = word.value.length;
//     // how much we have of the current word.
//     let current = document.getElementsByClassName("current-word")[0];
//     let currentSubstring = current.innerHTML.substring(0, wlen);
//     // check if we have any typing errors
//     if (word.value.trim() != currentSubstring) {
//         current.classList.add("incorrect-word-bg");
//         return false;
//     } else {
//         current.classList.remove("incorrect-word-bg");
//         return true;
//     }
// }

// function submitWord(word,sub) {
//     // update current-word and
//     // keep track of correct & incorrect words
//     let current = document.getElementsByClassName("current-word")[0];

//     if (checkWord(word)) {
//         current.classList.remove("current-word");
//         current.classList.add("correct-word-c");
//         wordData.correct += 1;
//     } else {
//         current.classList.remove("current-word", "incorrect-word-bg");
//         current.classList.add("incorrect-word-c");
//         wordData.incorrect += 1;
//     }
//     // update wordData
//     wordData.total = wordData.correct + wordData.incorrect;

//     // make the next word the new current-word.
//     current.nextSibling.classList.add("current-word");
//     sub(wordData.correct)

// }

// function isTimer(seconds,timertarget) {
//     // BUG: page refresh with keyboard triggers onkeyup and starts timer
//     // Use restart button to reset timer
//     console.log("time",time)
//     let time = seconds;
//     // only set timer once
//     let one = timertarget;
//     console.log("hamm",timertarget)
//     if (one == "1:00") {
//         let typingTimer = setInterval(() => {
//             if (time <= 0) {
//                 console.log("hello if block")
//                 clearInterval(typingTimer);
//             } else {
//                 console.log("hello elseboli")
//                 time -= 1;
//                 let timePad = (time < 10) ? ("0" + time) : time; // zero padded
//                 one = `0:${timePad}`;
//                 timertarget = "hammad"
//                 // one = time;
//                 // console.log("one console",one)
//             }
//         }, 1000);
//     } else if (one == "0:00") {return false;}
//     return true;
// }

// function calculateWPM(data,targetresult) {
//     let {seconds, correct, incorrect, total, typed} = data;
//     let min = (seconds / 60);
//     let wpm = Math.ceil((typed / 5) - (incorrect) / min);
//     let accuracy = Math.ceil((correct / total) * 100);

//     if (wpm < 0) {wpm = 0;}     // prevent negative wpm from incorrect words

//     // template strings are pretty cool
//     let results = `<ul id="results">
//         <li>WPM: <span class="wpm-value">${wpm}</span></li>
//         <li>Accuracy: <span class="wpm-value">${accuracy}%</span></li>
//         <li id="results-stats">
//         Total Words: <span>${total}</span> |
//         Correct Words: <span>${correct}</span> |
//         Incorrect Words: <span>${incorrect}</span> |
//         Characters Typed: <span>${typed}</span>
//         </li>
//         </ul>`;

//     targetresult.innerHTML = results;

//     // color code accuracy

//     console.log(wordData);
// }

//  function shuffle(array) {
//         let m = array.length, t, i;
//         // While there remain elements to shuffle…
//         while (m) {
//             // Pick a remaining element…
//             i = Math.floor(Math.random() * m--);
//             // And swap it with the current element.
//             t = array[m];
//             array[m] = array[i];
//             array[i] = t;
//         }
//         return array;
//     }
