import React from "react";
import { Link } from "react-router-dom";
import SignupReveal from '../subComponents/signupReveal'
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class SignupForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    reveal : false
  };

  handlecreat = () => {


    

    let date = new Date();
    let day = date.toLocaleDateString();
    let time = date.toLocaleTimeString();

    console.log(this.state);
    var options = {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email:this.state.email,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        date:day,
        time:time
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:8000/signup", options)
      .then(res => res.text())
      .then(message => {
        console.log(message);
      })
      .catch(error => console.log(error));
    // window.location.reload();
    this.clear()
    console.log("signup successfully")
  };

  clear = ()=>{this.setState({username: " ",
  email: " ",
  password: " ",
  firstName: " ",
  lastName: " "})}
  username = (e, data) => {
    this.setState({ username: data.value });
  };
  password = (e, data) => {
    this.setState({ password: data.value });
  };
  email = (e, data) => {
    this.setState({ email: data.value });
  };
  firstname = (e, data) => {
    this.setState({ firstName: data.value });
  };
  lastname = (e, data) => {
    this.setState({ lastName: data.value });
  };
  render() {
    return (
      <div className="login-form" style={{ height: "100%", marginTop: "5%" }}>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}

        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/images/child.png" /> Create New Account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={(e, data) => this.firstname(e, data)}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="First Name"
                />

                <Form.Input
                  onChange={(e, data) => this.lastname(e, data)}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                />
                <Form.Input
                  onChange={(e, data) => this.email(e, data)}
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Id"
                />
                <Form.Input
                  onChange={(e, data) => this.username(e, data)}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="UserName"
                />
                <Form.Input
                  onChange={(e, data) => this.password(e, data)}
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <SignupReveal button={ 
                
                     
                <Button
                    onClick={this.handlecreat}
                    color="teal"
                    fluid
                    size="large"
                  >
                    Create Account
                  </Button>
                  
                  } />

                 
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
     
      </div>
    
    );
  }
}

export default SignupForm;
