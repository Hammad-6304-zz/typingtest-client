import PropTypes from "prop-types";
import HomepageHeading from "./homeHeading";
import { getWidth } from "./getwidth";
import AppBar from "../subComponents/navbar";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import NavigationBar from "./navbar";
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
class DesktopContainer extends Component {
  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <AppBar
          content={this.props.content}
          subContent={this.props.subContent}
          buttonText={this.props.buttonText}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};
export default DesktopContainer;

/*
   <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as='a' >
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>Typing Tutor</Menu.Item>
                  <Menu.Item active as='a'><Link to="/typingtest" >Typing Test</Link></Menu.Item>
                  <Menu.Item as='a'>Learn</Menu.Item>
                  
                  <Menu.Item as='a'><Link to="/HighScore" >High Scores</Link></Menu.Item>
                  
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading content="Take a free typing test" subContent="Type a short piece of text to find out how fast can you type, test your typing speed in wpm and impress your friends or employers with your own typing certificate." buttonText="TAKE A TYPING TEST NOW" />
            </Segment>
          </Visibility>
  
  */
