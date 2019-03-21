import PropTypes from "prop-types";
import HomepageHeading from "./homeHeading";
import { getWidth } from "./getwidth";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
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
  Label,
  Visibility,
  Dropdown
} from "semantic-ui-react";
class AppBar extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  logout=()=>{
    var options = {
      method: "POST",
      body: "",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:8000/logout",options)
      .then(res => res.text())
      .then(message => {console.log(message)
        
      sessionStorage.setItem("log",message)
      })
      .catch(error => console.log(error)
      );
      sessionStorage.clear();
      window.location.reload();



  }

  render() {
    let userData ;
    if(sessionStorage.getItem("status")){

      let data = JSON.parse(sessionStorage.getItem("status"));
       userData = data.userData;
      console.log("am from navbar",userData)
    }
    else{
       userData = {firstName:"",lastName:""}
    }
      const { fixed } = this.state;
      const url = this.props.bgURL;
    const comp = "url(" + url + " ) ";
    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 700,
            padding: "0em 0em",
            backgroundImage: comp,
            backgroundAttachment: "fixed",
            backgroundOrigin: "borderBox",
            backgroundRepeat: "noRepeat",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            // inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            style={{
              margin: "0px",
              padding: "0px",
              backgroundColor: "rgba(175, 174, 174, 0.767)"
            }}
            size="large"
            color={this.props.color}
          >
            <Container>
              <Link to="/">
                <Menu.Item active={this.props.activehome}>Home</Menu.Item>
              </Link>

              <Link to="/typingtest">
                <Menu.Item active={this.props.activetest}>
                  Typing Test
                </Menu.Item>
              </Link>
              <Link to="/learn">
                <Menu.Item active={this.props.activelearn}>Learn</Menu.Item>
              </Link>

              <Link to="/HighScore">
                <Menu.Item active={this.props.activescore}>
                  High Scores
                </Menu.Item>
              </Link>
              {this.props.loggedin === true ? (
                <Menu.Item position="right">
                  <Image avatar spaced="right" src="/images/girl.png" />
                  <span style={{fontWeight:'bold'}}>{userData.firstName} {userData.lastName}</span>
                  <Dropdown>
                    <Dropdown.Menu>
                      <Dropdown.Item text="New" />
                      
                      <Dropdown.Item text="hel" />
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={this.logout} text="Logout" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              ) : (
                <Menu.Item position="right">
                  <Link to="/login"><Button inverted={!fixed}>Log in</Button></Link>
                 <Link to="/signup">
                  <Button
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    >
                    Sign Up
                  </Button>
                    </Link>
                </Menu.Item>
              )}

            
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
