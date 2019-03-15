import PropTypes from "prop-types";
import HomepageHeading from "./homeHeading";
import { getWidth } from "./getwidth";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
class AppBar extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Link to="/">
                <Menu.Item as="a">Home</Menu.Item>
              </Link>

              <Link to="/typingtest">
                <Menu.Item active as="a">
                  Typing Test
                </Menu.Item>
              </Link>
              <Link to="/learn">
                <Menu.Item as="a">Learn</Menu.Item>
              </Link>

              <Link to="/HighScore">
                <Menu.Item as="a">High Scores</Menu.Item>
              </Link>

              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button
                  as="a"
                  inverted={!fixed}
                  primary={fixed}
                  style={{ marginLeft: "0.5em" }}
                >
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading
            content={this.props.content}
            subContent={this.props.subContent}
            buttonText={this.props.buttonText}
          />
        </Segment>
      </Visibility>
    );
  }
}

export default AppBar;
