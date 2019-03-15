import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon
} from "semantic-ui-react";

export const BlogSegment = () => {
  return (
    <Segment style={{ padding: "0em" }} vertical>
      <Header
        textAlign="center"
        as="h1"
        style={{ fontSize: "3em", marginTop: "1em" }}
      >
        "Top Blog"
      </Header>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="left">
          <Grid.Column style={{ paddingBottom: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Want a Keyboarding Curriculum that Works?
            </Header>

            <Image fluid src="/images/shortcut.jpg" />
            <p style={{ fontSize: "1.33em" }}>
              Get this: keyboarding helps students learn the alphabet! As a
              technology teacher, I see roughly 500 K-5 students for 40 minutes
              a week. While kids may be a wiz on a tablet or a touchscreen
              device, I’ve discovered many of them have never used a keyboard or
              managed a mouse. So that’s where I start. I use TypeTastic with my
              K-2 students, and there’s no doubt the gamification of learning a
              new skill works. With my kindergartners, (and even some
              1st-graders) I start off with Keyboard Builder, Cupcake Bugs, and
              Frog Pond Patrol.
            </p>
            <Button as="a" size="large">
              Read More <Icon name="right arrow" />
            </Button>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              5 Shortcuts to Increase Your Typing Speed
            </Header>
            <Image fluid src="/images/shortcut.jpg" />
            <p style={{ fontSize: "1.33em" }}>
              We all know that typing speed matters. Whether you’re applying for
              a job as a paralegal or an executive assistant, being able to type
              quickly and accurately might be the only skill that stands between
              you and another equally qualified applicant.
            </p>
            <Button as="a" size="large">
              Read More <Icon name="right arrow" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
