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
class MenuBar extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;

    return (
   
     
       
              <Menu
            fixed={fixed ? "top" : null}
            inverted={fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            
            
          >
            <Container>
              <Menu.Item as="a">
                <Link to="/">Home</Link>
              </Menu.Item>
              
              <Menu.Item active as="a">
                <Link to="/typingtest">Typing Test</Link>
              </Menu.Item>
              <Menu.Item as="a">
                <Link to="/learn">Learn</Link>
              </Menu.Item>

              <Menu.Item as="a">
                <Link to="/HighScore">High Scores</Link>
              </Menu.Item>

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
        
    );
  }
}

export default MenuBar;
