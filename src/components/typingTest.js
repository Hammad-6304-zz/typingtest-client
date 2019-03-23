import React from "react";
import { ResponsiveContainer } from "../subComponents/responsiveCon";
import { Link } from "react-router-dom";

import Footer from "./footer";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";

const TypingTest = props => (
  <ResponsiveContainer
    content="Gamica Typing Test"
    subContent="Test your typing skills free here and improve yourself   "
    buttonText="Take a test"
    // color=''
    bgURL="/images/lightkey.jpg"
    activetest={true}
    loggedin={props.loggedin}
  >
    <Segment className="certsSeg" vertical>
      <Grid>
        <Grid.Row textAlign="center">
          <Grid.Column>
            <Container centered="true">
              <div
                style={{
                  maxWidth: "70%",
                  marginLeft: "15%",
                  maxHeight: "auto"
                }}
              >
                <Image centered src="/images/certs.png" />
              </div>

              <Segment>
                <Grid columns={2} stackable relaxed="very">
                  <Grid.Column>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sequi odit error dolorum sint eveniet rerum culpa
                      accusantium eum similique excepturi aut, quia non porro
                      optio quaerat aliquam deleniti voluptatibus vero placeat
                      voluptas. Architecto animi maiores consequuntur,
                    </p>
                    <p>
                      similique vel laboriosam tempore. Sint inventore
                      reiciendis, ipsam harum hic dicta error officiis incidunt
                      ratione corrupti doloremque, aperiam porro. Velit, dicta
                      magni? Quae dolorum, molestiae eligendi amet quia eius
                      architecto quisquam enim vel nulla ducimus quod quibusdam
                      repudiandae
                    </p>
                    <p>
                      placeat accusantium asperiores voluptates quam recusandae!
                      Deleniti officia sequi ipsum ab a qui reiciendis officiis
                      voluptatibus magni aspernatur quis voluptatem, rem
                      repudiandae deserunt suscipit eum quod.
                    </p>
                  </Grid.Column>
                  <Grid.Column>
                    <p>
                      placeat accusantium asperiores voluptates quam recusandae!
                      Deleniti officia sequi ipsum ab a qui reiciendis officiis
                      voluptatibus magni aspernatur quis voluptatem, rem
                      repudiandae deserunt suscipit eum quod.
                    </p>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sequi odit error dolorum sint eveniet rerum culpa
                      accusantium eum similique excepturi aut, quia non porro
                      optio quaerat aliquam deleniti voluptatibus vero placeat
                      voluptas. Architecto animi maiores consequuntur,
                    </p>
                    <p>
                      similique vel laboriosam tempore. Sint inventore
                      reiciendis, ipsam harum hic dicta error officiis incidunt
                      ratione corrupti doloremque, aperiam porro. Velit, dicta
                      magni? Quae dolorum, molestiae eligendi amet quia eius
                      architecto quisquam enim vel nulla ducimus quod quibusdam
                      repudiandae
                    </p>
                  </Grid.Column>
                </Grid>

                <Divider vertical>And</Divider>
              </Segment>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment className="blogCon">
      <Container>
        <Grid columns={2} padded stackable>
          <Grid.Column>
            <Header as="h3" size="large" style={{ fontSize: "1.5em" }}>
              Why should you take <br />a typing speed test?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              You can check your typing speed and accuracy online. Compare it
              with other results in the rankings and increase it using Ratatype.
              The average typing speed is 40 WPM, try to exceed it!
            </p>
            <p style={{ fontSize: "1.33em" }}>
              After completing the typing speed test you will receive a
              certificate that you can attach to your CV or show to your teacher
              and friends.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" size="large" style={{ fontSize: "1.5em" }}>
              How do we measure <br />a typing speed?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We measure your typing speed in WPM (words per minute). It is a
              calculation of how fast you type words with no typos. By the
              "word" we mean an average of 5 characters including spaces. We
              measure gross speed in our typing test.{" "}
            </p>
            <p style={{ fontSize: "1.33em" }}>
              However, we don't allow you to continue typing if you have a typo
              in your test. You have to fix it to proceed the WPM test.
            </p>
          </Grid.Column>
        </Grid>
        <Divider />
        <Grid columns={2} centered padded stackable>
          <Grid.Column>
            <Header
              as="h3"
              textAlign="center"
              size="large"
              style={{ fontSize: "1.5em" }}
            >
              It will take only 2-3 minutes!
            </Header>
            <p style={{ fontSize: "1.33em", textAlign: "center" }}>
              You can practice as much as necessary because you have no limits.{" "}
              <br />
              Grab your keyboard and get your typing speed timed!
            </p>
            <p style={{ fontSize: "1.33em", textAlign: "center" }}>
              <Link to="/typingtest/test">
                <Button>TAKE A TEST</Button>
              </Link>
            </p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>

    <Footer />
  </ResponsiveContainer>
);
export default TypingTest;
