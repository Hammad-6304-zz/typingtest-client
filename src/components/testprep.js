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

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon,
  Menu
} from "semantic-ui-react";

let wordList = [
  "the",
  "name",
  "of",
  "very",
  "to",
  "through",
  "and",
  "just",
  "a",
  "form",
  "in",
  "much",
  "is",
  "great",
  "it",
  "think",
  "you",
  "say",
  "that",
  "help",
  "he",
  "low",
  "was",
  "line",
  "for",
  "before",
  "on",
  "turn",
  "are",
  "cause",
  "with",
  "same",
  "as",
  "mean",
  "I",
  "differ",
  "his",
  "move",
  "they",
  "right",
  "be",
  "boy",
  "at",
  "old",
  "one",
  "too",
  "have",
  "does",
  "this",
  "tell",
  "from",
  "sentence",
  "or",
  "set",
  "had",
  "three",
  "by",
  "want",
  "hot",
  "air",
  "but",
  "well",
  "some",
  "also",
  "what",
  "play",
  "there",
  "small",
  "we",
  "end",
  "can",
  "put",
  "out",
  "home",
  "other",
  "read",
  "were",
  "hand",
  "all",
  "port",
  "your",
  "large",
  "when",
  "spell",
  "up",
  "add",
  "use",
  "even",
  "word",
  "land",
  "how",
  "here",
  "said",
  "must",
  "an",
  "big",
  "each",
  "high",
  "she",
  "such",
  "which",
  "follow",
  "do",
  "act",
  "their",
  "why",
  "time",
  "ask",
  "if",
  "men",
  "will",
  "change",
  "way",
  "went",
  "about",
  "light",
  "many",
  "kind",
  "then",
  "off",
  "them",
  "need",
  "would",
  "house",
  "write",
  "picture",
  "like",
  "try",
  "so",
  "us",
  "these",
  "again",
  "her",
  "animal",
  "long",
  "point",
  "make",
  "mother",
  "thing",
  "world",
  "see",
  "near",
  "him",
  "build",
  "two",
  "self",
  "has",
  "earth",
  "look",
  "father",
  "more",
  "head",
  "day",
  "stand",
  "could",
  "own",
  "go",
  "page",
  "come",
  "should",
  "did",
  "country",
  "my",
  "found",
  "sound",
  "answer",
  "no",
  "school",
  "most",
  "grow",
  "number",
  "study",
  "who",
  "still",
  "over",
  "learn",
  "know",
  "plant",
  "water",
  "cover",
  "than",
  "food",
  "call",
  "sun",
  "first",
  "four",
  "people",
  "thought",
  "may",
  "let",
  "down",
  "keep",
  "side",
  "eye",
  "been",
  "never",
  "now",
  "last",
  "find",
  "door",
  "any",
  "between",
  "new",
  "city",
  "work",
  "tree",
  "part",
  "cross",
  "take",
  "since",
  "get",
  "hard",
  "place",
  "start",
  "made",
  "might",
  "live",
  "story",
  "where",
  "saw",
  "after",
  "far",
  "back",
  "sea",
  "little",
  "draw",
  "only",
  "left",
  "round",
  "late",
  "man",
  "run",
  "year",
  "don't",
  "came",
  "while",
  "show",
  "press",
  "every",
  "close",
  "good",
  "night",
  "me",
  "real",
  "give",
  "life",
  "our",
  "few",
  "under",
  "stop",
  "open",
  "ten",
  "seem",
  "simple",
  "together",
  "several",
  "next",
  "vowel",
  "white",
  "toward",
  "children",
  "war",
  "begin",
  "lay",
  "got",
  "against",
  "walk",
  "pattern",
  "example",
  "slow",
  "ease",
  "center",
  "paper",
  "love",
  "often",
  "person",
  "always",
  "money",
  "music",
  "serve",
  "those",
  "appear",
  "both",
  "road",
  "mark",
  "map",
  "book",
  "science",
  "letter",
  "rule",
  "until",
  "govern",
  "mile",
  "pull",
  "river",
  "cold",
  "car",
  "notice",
  "feet",
  "voice",
  "care",
  "fall",
  "second",
  "power",
  "group",
  "town",
  "carry",
  "fine",
  "took",
  "certain",
  "rain",
  "fly",
  "eat",
  "unit",
  "room",
  "lead",
  "friend",
  "cry",
  "began",
  "dark",
  "idea",
  "machine",
  "fish",
  "note",
  "mountain",
  "wait",
  "north",
  "plan",
  "once",
  "figure",
  "base",
  "star",
  "hear",
  "box",
  "horse",
  "noun",
  "cut",
  "field",
  "sure",
  "rest",
  "watch",
  "correct",
  "color",
  "able",
  "face",
  "pound",
  "wood",
  "done",
  "main",
  "beauty",
  "enough",
  "drive",
  "plain",
  "stood",
  "girl",
  "contain",
  "usual",
  "front",
  "young",
  "teach",
  "ready",
  "week",
  "above",
  "final",
  "ever",
  "gave",
  "red",
  "green",
  "list",
  "oh",
  "though",
  "quick",
  "feel",
  "develop",
  "talk",
  "sleep",
  "bird",
  "warm",
  "soon",
  "free",
  "body",
  "minute",
  "dog",
  "strong",
  "family",
  "special",
  "direct",
  "mind",
  "pose",
  "behind",
  "leave",
  "clear",
  "song",
  "tail",
  "measure",
  "produce",
  "state",
  "fact",
  "product",
  "street",
  "black",
  "inch",
  "short",
  "lot",
  "numeral",
  "nothing",
  "class",
  "course",
  "wind",
  "stay",
  "question",
  "wheel",
  "happen",
  "full",
  "complete",
  "force",
  "ship",
  "blue",
  "area",
  "object",
  "half",
  "decide",
  "rock",
  "surface",
  "order",
  "deep",
  "fire",
  "moon",
  "south",
  "island",
  "problem",
  "foot",
  "piece",
  "yet",
  "told",
  "busy",
  "knew",
  "test",
  "pass",
  "record",
  "farm",
  "boat",
  "top",
  "common",
  "whole",
  "gold",
  "king",
  "possible",
  "size",
  "plane",
  "heard",
  "age",
  "best",
  "dry",
  "hour",
  "wonder",
  "better",
  "laugh",
  "true",
  "thousand",
  "during",
  "ago",
  "hundred",
  "ran",
  "am",
  "check",
  "remember",
  "game",
  "step",
  "shape",
  "early",
  "yes",
  "hold",
  "hot",
  "west",
  "miss",
  "ground",
  "brought",
  "interest",
  "heat",
  "reach",
  "snow",
  "fast",
  "bed",
  "five",
  "bring",
  "sing",
  "sit",
  "listen",
  "perhaps",
  "six",
  "fill",
  "table",
  "east",
  "travel",
  "weight",
  "less",
  "language",
  "morning",
  "among"
];

let wordData = {
  seconds: 5,
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
    disp:''
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
      disp : data.disp
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
      }
    }
    console.log(wordData);
  };

  start = () => {
    //     console.log(this.sibling)
    //    this.sibling.nextSibling.classList.add("hello")
    //     console.log(this.sibling.nextSibling)
    //     let current = document.getElementsByClassName("hello")[0]
    //     console.log("current node",current);
    //     console.log(current.nextSibling)

    // clear existing word-section
    let wordSection = this.target;
    wordSection.innerHTML = "";

    for (let i = 350; i > 0; i--) {
      let words = shuffle(wordList);
      let wordSpan = `<span>${words[i]}</span>`;
      wordSection.innerHTML += wordSpan;
    }
    // mark first word as current-word
    wordSection.firstChild.classList.add("current-word");
    console.log(wordSection.firstChild);

    // mark last word with magic-box
    // let magicBox = document.createElement("DIV");
    // magicBox.classList.add("magic-box");
    // wordSection.appendChild(magicBox);
  };
  componentDidMount() {
    this.start();
  }

  render() {
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

            <Menu.Item position="right">
              <Button>Log in</Button>
              <Button style={{ marginLeft: "0.5em" }}>Sign Up</Button>
            </Menu.Item>
          </Container>
        </Menu>
      
        {this.state.dim === true ? (
          
            <DimmerResult />
        ) :null}
        
        <Segment  vertical style={{ marginTop: "3%",display:this.state.disp }}>
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
                      color: "olive"
                    }}
                  >
                    <div style={{ marginBottom: "20px" }}>
                      <Icon name="clock outline" />{" "}
                      <span
                        ref={ref => (this.speedtarget = ref)}
                        style={{ fontSize: "0.7em" }}
                      >
                        Speed
                      </span>
                      <div style={{ marginTop: "20px" }}>
                        98WPM{this.state.correct}
                      </div>
                    </div>
                    <div>
                      <Icon name="flag checkered" />{" "}
                      <span
                        ref={ref => (this.accuracytarget = ref)}
                        style={{ fontSize: "0.7em" }}
                      >
                        Accuracy
                      </span>
                      <div style={{ marginTop: "20px" }}>100%</div>
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
                    ref={ref => (this.textbox = ref)}
                    onKeyUp={e => this.typingTest(e)}
                    style={{ resize: "none", minWidth: "80%", height: "120px" }}
                  />
                  <span style={{ padding: "2%" }}>
                    <Button color="youtube" onClick={this.start}>
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
        <div ref={ref => (this.timer = ref)}>{this.state.timer}</div>
        <div>
          <span ref={ref => (this.sibling = ref)}>1st sibling</span>
          <span>2nd sibling</span>
          <span>3nd sibling</span>
        </div>
        <div ref={ref => (this.result = ref)}>result</div>
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
