import PropTypes from "prop-types";
import HomepageHeading from "./homeHeading";
import { Link } from "react-router-dom";
import { getWidth } from "./getwidth";
import React, { Component } from "react";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Image,
  Dropdown
} from "semantic-ui-react";
class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  logout = () => {
    var options = {
      method: "POST",
      body: "",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:8000/logout", options)
      .then(res => res.text())
      .then(message => {
        console.log(message);

        sessionStorage.setItem("log", message);
      })
      .catch(error => console.log(error));
    sessionStorage.clear();
    window.location.reload();
  };

  render() {
    let userData;
    if (sessionStorage.getItem("status")) {
      let data = JSON.parse(sessionStorage.getItem("status"));
      userData = data.userData;
    } else {
      userData = { firstName: "", lastName: "" };
    }

    const { children } = this.props;
    const { sidebarOpened } = this.state;
    const url = this.props.bgURL;
    const comp = "url(" + url + " ) ";
    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
          color={this.props.color}
        >

          <Link to="/">
            <Menu.Item active={this.props.activetest}>Typing Test</Menu.Item>
          </Link>
          <Link to="/learn">
            <Menu.Item active={this.props.activelearn}>Learn</Menu.Item>
          </Link>

          <Link to="/HighScore">
            <Menu.Item active={this.props.activescore}>High Scores</Menu.Item>
          </Link>
          <Link to="/blogs">
            <Menu.Item active={this.props.activehome}>Blogs</Menu.Item>
          </Link>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 350,
              padding: "1em 0em",
              backgroundImage: comp,
              backgroundAttachment: "fixed",
              backgroundOrigin: "borderBox",
              backgroundRepeat: "noRepeat",
              backgroundSize: "cover",
              backgroundPosition: "center center"
            }}
          >
            <Container>
              <Menu style={{border:'none'}} inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>

                {this.props.loggedin === true ? (
                  <Menu.Item position="right">
                    <span style={{ fontWeight: "bold" }}>
                      {userData.firstName} {userData.lastName}
                    </span>
                    <Dropdown>
                      <Dropdown.Menu>
                        <Dropdown.Item text="New" />
                        <Dropdown.Item text="Open" />
                        <Dropdown.Item text="Save" />
                        <Dropdown.Item text="Rename" />
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={this.logout} text="Logout" />
                      </Dropdown.Menu>
                    </Dropdown>
                    <Image avatar spaced="left" src="/images/avatar.jpg" />
                  </Menu.Item>
                ) : (
                  <Menu.Item position="right">
                  <Link to="/login">
                  
                    <Button size="tiny" inverted>Log in</Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="tiny" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Link>
                  </Menu.Item>
                )}
               
              </Menu>
            </Container>
            <HomepageHeading
              mobile
              content={this.props.content}
              subContent={this.props.subContent}
              buttonText={this.props.buttonText}
            />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};
export default MobileContainer;
