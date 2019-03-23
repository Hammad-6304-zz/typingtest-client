import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Grid,
  Dropdown,
  Image,
  Segment,
  Icon,
  Menu,
  Header
} from "semantic-ui-react";
class Certificate extends React.Component {
  state = {
    loginStatus: false
  };
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

        sessionStorage.setItem("log", message);
      })
      .catch(error => console.log());
    sessionStorage.clear();
    window.location.reload();
  };
  componentDidMount() {
    if (sessionStorage.getItem("status")) {
      this.setState({ loginStatus: true });
    }
  }
  render() {
    let userData;
    if (sessionStorage.getItem("status")) {
      let data = JSON.parse(sessionStorage.getItem("status"));
      userData = data.userData;
    } else {
      userData = { firstName: "", lastName: "" };
    }
    return (
      <div>
        {this.state.loginStatus === true ? (
          <div>
         <Menu
          style={{ margin: "0px", padding: "0px", background: "#C0C0C0" }}
          size="large"
        >
          <Container>
            <Link to="/">
              <Menu.Item>
            
            <Icon name="arrow circle left" size="big" color="violet" style={{marginTop:'2px'}} />back
          
              </Menu.Item>
            </Link>

            

            {this.props.loggedin === true ? (
                <Menu.Item position="right">
                  <Image avatar spaced="right" src="/images/avatar.jpg" />
                  <span style={{ fontWeight: "bold" }}>
                    {userData.firstName} {userData.lastName}
                  </span>
                  <Dropdown>
                    <Dropdown.Menu>
                     
                      <Dropdown.Item onClick={this.logout} text="Logout" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              ) : (
                <Menu.Item position="right">
                  <Link to="/login"><Button >Log in</Button></Link>
                 <Link to="/signup">
                  <Button
                    
                    style={{ marginLeft: "0.5em" }}
                    >
                    Sign Up
                  </Button>
                    </Link>
                </Menu.Item>
              )}
          </Container>
        </Menu>
            <Grid columns="equal" stackable>
              {/* <Grid.Row>
            <Segment  textAlign="center" style={{width:'100%'}}>
            
            <Header  as="h1">
            Congratulations 
            </Header>
            
            </Segment>
          </Grid.Row> */}
              <Grid.Row style={{ margin: "3% 0" }}>
                <Grid.Column width="1" />
                <Grid.Column>
                  <Segment>
                    <Image src="/images/certificate.jpg" size="massive" />
                  </Segment>
                </Grid.Column>
                <Grid.Column
                  textAlign="center"
                  width="4"
                  style={{ marginRight: "3%" }}
                >
                  <Header>Certificate Recipient</Header>
                  <Segment>
                    <Image avatar size="small" src="/images/avatar.jpg" />
                    <Header>{userData.firstName} {userData.lastName}</Header>
                  </Segment>
                  <Button primary style={{ margin: "4% 0" }}>
                    Download Certificate
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                textAlign: "center",
                marginTop: "10%",
                fontSize: "50px"
              }}
            >
              your are not logged in
            </h1>
            <Link to="/login">
              <Button color="red">Please Log in</Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default Certificate;
