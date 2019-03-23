import React from "react";
import { ResponsiveContainer } from "../subComponents/responsiveCon";
import Footer from "./footer";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

const Learn = (props) => (
  <div>
    <ResponsiveContainer
      content="Lean How To Type"
      subContent="some tips and tricks from experts for improve your typing"
      buttonText="hide"
      // color=''
      bgURL = '/images/keybackshade.jpg'
      activelearn={true}
    loggedin={props.loggedin}
    >
      <Segment vertical>
        <Container className="tableOfScore">
          <Grid columns="equal" stackable>
            <Grid.Row>
              <Grid.Column style={{ marginLeft: "2% " }}>
                <Header as="h2" size="medium" style={{ fontSize: "3em" }}>
                  Learn How to touch type
                </Header>
                <Header.Subheader as="h4">
                  Touch typing is all about the idea that each finger has its
                  own area on the keyboard. Thanks to that fact you can type
                  without looking at the keys. Practice regularly and your
                  fingers will learn their location on the keyboard through
                  muscle memory.
                </Header.Subheader>
              </Grid.Column>
            </Grid.Row>
            <Divider />

            <Grid.Row column={3}>
              <Grid.Column style={{ marginLeft: "2% " }}>
                <Header as="h4" size="medium" style={{ fontSize: "2em" }}>
                  Sitting posture <br /> for typing
                </Header>
              </Grid.Column>
              <Grid.Column width="8" style={{ marginLeft: "2% " }}>
                <ul style={{ listStyle: "dots", fontSize: "1.2em" }}>
                  <li>Sit straight and remember to keep your back straight.</li>
                  <li style={{ margin: "2% 0" }}>
                    Keep your elbows bent at the right angle.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Face the screen with your head slightly tilted forward.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Keep at least 45 - 70 cm of distance between your eyes and
                    the screen.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Еxpose the shoulder, arm, and wrist muscles to the least
                    possible strain. The wrists can touch the tabletop in front
                    of the keyboard. Never shift your body weight to the wrists
                    by resting on them.
                  </li>
                </ul>
              </Grid.Column>
              <Grid.Column style={{ marginLeft: "2% " }}>
                <Image src="/images/en.png" />
              </Grid.Column>
            </Grid.Row>
            <Divider />

            <Grid.Row>
              <Grid.Column width="4">
                <Header as="h4" size="medium" style={{ fontSize: "2em" }}>
                  Home <br />
                  Row Positioning
                </Header>
              </Grid.Column>
              <Grid.Column width="2" />
              <Grid.Column width="10">
                <Image src="/images/main_keys.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="4" />
              <Grid.Column width="10">
                <p style={{ fontSize: "1.2em" }}>
                  Curve your fingers a little and put them on the ASDF and JKL;
                  keys which are located in the middle row of the letter keys.
                  This row is called HOME ROW because you always start from
                  these keys and always return to them.
                </p>
                <p style={{ fontSize: "1.2em" }}>
                  F and J keys under your index fingers should have a raised
                  line on them to aide in finding these keys without looking.
                </p>
              </Grid.Column>
              <Grid.Column width="2" />
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column width="4">
                <Header as="h4" size="medium" style={{ fontSize: "2em" }}>
                  keyboard Scheme
                </Header>
              </Grid.Column>
              <Grid.Column width="1" />
              <Grid.Column width="10">
                <Image src="/images/keyboard.png" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="3" />
              <Grid.Column width="11">
                <p style={{ fontSize: "1.2em" }}>
                  Кeyboard scheme The color-coded keyboard under lesson input
                  field will help you to understand which finger should press
                  each key.
                </p>
                <ul style={{ listStyle: "dots", fontSize: "1.2em" }}>
                  <li style={{ margin: "2% 0" }}>
                    Hit keys only with the fingers for which they have been
                    reserved.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Always return to the starting position of the fingers "ASDF
                    – JKL;".
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    When typing, imagine the location of the symbol on the
                    keyboard.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Establish and maintain a rhythm while typing. Your
                    keystrokes should come at equal intervals.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    The SHIFT key is always pressed by the pinky finger opposite
                    to the one hitting the other key.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Use the thumb of whichever hand is more convenient for you
                    to press the Space bar.
                  </li>
                </ul>
                <p style={{ fontSize: "1.2em" }}>
                  This method may seem inconvenient at first, but do not stop,
                  eventually you’ll find out that you are typing quickly, easily
                  and conveniently.
                </p>
              </Grid.Column>
              <Grid.Column width="2" />
            </Grid.Row>
            <Divider />

            <Grid.Row column={3}>
              <Grid.Column style={{ marginLeft: "2% " }}>
                <Header as="h4" size="medium" style={{ fontSize: "2em" }}>
                  Fingers <br /> motion{" "}
                </Header>
              </Grid.Column>
              <Grid.Column width="8" style={{ marginLeft: "2% " }}>
                <ul style={{ listStyle: "dots", fontSize: "1.2em" }}>
                  <li>Sit straight and remember to keep your back straight.</li>
                  <li style={{ margin: "2% 0" }}>
                    Keep your elbows bent at the right angle.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Face the screen with your head slightly tilted forward.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Keep at least 45 - 70 cm of distance between your eyes and
                    the screen.
                  </li>
                  <li style={{ margin: "2% 0" }}>
                    Еxpose the shoulder, arm, and wrist muscles to the least
                    possible strain. The wrists can touch the tabletop in front
                    of the keyboard. Never shift your body weight to the wrists
                    by resting on them.
                  </li>
                </ul>
              </Grid.Column>
              <Grid.Column verticalAlign="bottom">
                <Image src="/images/girl.png" />
              </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row column={3}>
              <Grid.Column width="1" />
              <Grid.Column width="4" verticalAlign="bottom">
                <Image src="/images/child.png" />
              </Grid.Column>
              <Grid.Column width="10" style={{ marginLeft: "2% " }}>
                <p style={{ fontSize: "1.2em", marginTop: "3%" }}>
                  Psst! You could have more fun with groups. Invite your friends
                  for collective studies and competitions. Groups work well for
                  teachers too.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Divider />
          </Grid>
        </Container>
      </Segment>

      <Footer />
    </ResponsiveContainer>
  </div>
);
export default Learn;
