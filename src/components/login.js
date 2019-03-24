import React from "react";
import { Link } from "react-router-dom";
import { LoginFormErrors } from "../subComponents/loginFormErrors";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    nav: false,
    logStatus: false,
    formErrors: { username: "", password: "" },
    usernameValid: false,
    passwordValid: false,
    formValid: false
  };

  handleSubmit = () => {
    var options = {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:8000/login", options)
      .then(res => res.text())
      .then(message => {
        if (message === "Unauthorized") {
          alert("woridn details");
        } else if (message === "Bad Request") {
          alert("filll both form ");
        } else {
          let data1 = JSON.parse(message);
          delete data1.userData.time;
          delete data1.userData.date;
          delete data1.userData._id;
          delete data1.userData.password;

          sessionStorage.setItem("status", JSON.stringify(data1));
          
          this.reload();
        }
      })
      .catch(error => console.log(error));
  };
  reload = () => {
    setTimeout(() => {
      
      window.location.reload();
    }, 500);
  };
  

  submitting = (e, data) => {
    const name = data.name;
    const value = data.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
   
  };
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "username":
        usernameValid = value.trim().length >= 6;
        fieldValidationErrors.username = usernameValid
          ? ""
          : " must should be atleast 6 char lenghty";
        break;
      case "password":
        passwordValid = value.trim().length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short ";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid
    });
  }

  componentDidMount() {
    if (sessionStorage.getItem("status")) {
      this.setState({ logStatus: true });
    }
  }

  render() {
    return (
      <div>
        <div style={{ padding: "2%" }}>
          <Link to="/">
            <Icon name="arrow circle left" size="big" />
          </Link>
        </div>
        {this.state.logStatus === false ? (
          <div>
          

            <Grid
              textAlign="center"
              style={{ height: "100%" }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                  <Image src="/images/child.png" /> Log-in to your account
                </Header>
                <Form size="large">
                  <LoginFormErrors formErrors={this.state.formErrors} />
                  <Segment stacked>
                    <Form.Input
                      onChange={(e, data) => this.submitting(e, data)}
                      fluid
                      error={
                        this.state.username === ""
                          ? false
                          : !this.state.usernameValid
                      }
                      value={this.state.username}
                      name="username"
                      icon="user"
                      iconPosition="left"
                      placeholder="UserName"
                    />
                    <Form.Input
                      onChange={(e, data) => this.submitting(e, data)}
                      fluid
                      error={
                        this.state.password === ""
                          ? false
                          : !this.state.passwordValid
                      }
                      value={this.state.password}
                      name="password"
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />

                    {/* <Link to='/'> */}
                    <Button
                      onClick={this.handleSubmit}
                      color="teal"
                      fluid
                      disabled={!this.state.formValid}
                      size="large"
                    >
                      Login
                    </Button>
                    {/* </Link> */}
                    {/* {this.state.nav ? ( */}

                    {/* ) : null}  */}
                  </Segment>
                </Form>
                <Message>
                  <Link to="signup">
                    <Button color="violet" size="large" fluid>
                      New to us? SignUp
                    </Button>
                  </Link>
                </Message>
              </Grid.Column>
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
              your are logged in
            </h1>
            <Link to="/">
              <Button color="red">Go to Main</Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default LoginForm;



  // "proxy": "https://gamicatypingtest.herokuapp.com"