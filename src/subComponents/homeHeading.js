import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import { Button, Container, Header, Icon, Image } from "semantic-ui-react";

const HomepageHeading = props => (
  <Container textAlign="left" text>
    <Header
      className="slide-in-left"
      as="h1"
      content={props.content}
      inverted
      style={{
        fontSize: props.mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: props.mobile ? "1.5em" : "3em"
      }}
    />
    <Header
    className="scale-in-hor-center"
      as="h2"
      content={props.subContent}
      inverted
      style={{
        fontSize: props.mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: props.mobile ? "0.5em" : "1.5em"
      }}
    />
    {props.buttonText === "hide" ? (
      <div />
    ) : (
      <Link to="/typingtest/test">
        <Button className="shake-lr" inverted size="huge">
          {props.buttonText}
          <Icon name="right arrow" />
        </Button>
      </Link>
    )}

    <div style={{ width: "10%", margin: "auto" }}>
      <Image
        style={{ marginTop: "5%" }}
        className="blink-2"
        size="mini"
        src="/images/arrow.png"
      />
    </div>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
