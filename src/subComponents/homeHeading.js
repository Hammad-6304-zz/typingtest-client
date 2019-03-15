import PropTypes from "prop-types";
import React, { Component } from "react";

import { Button, Container, Header, Icon, Image } from "semantic-ui-react";

const HomepageHeading = props => (
  <Container text>
    <Header
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
      as="h2"
      content={props.subContent}
      inverted
      style={{
        fontSize: props.mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: props.mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button inverted size="huge">
      {props.buttonText}
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
