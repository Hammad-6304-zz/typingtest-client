import React from "react";
import { FormErrors } from "../subComponents/formerror";
import { Link } from "react-router-dom";
import SignupReveal from "../subComponents/signupReveal";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Icon
} from "semantic-ui-react";

class SignupForm extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    reveal: false,
    formErrors: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      username: ""
    },
    emailValid: false,
    passwordValid: false,
    firstNameValid: false,
    lastNameValid: false,
    usernameValid: false,
    formValid: false
  };

  handlecreat = () => {
    let date = new Date();
    let day = date.toLocaleDateString();
    let time = date.toLocaleTimeString();

    var options = {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        date: day,
        time: time
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:8000/signup", options)
      .then(res => res.text())
      .then(message => {
        console.log();
      })
      .catch(error => console.log());
    this.clear();
  };

  clear = () => {
    this.setState({
      username: " ",
      email: " ",
      password: " ",
      firstName: " ",
      lastName: " "
    });
  };
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let usernameValid = this.state.usernameValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.trim().length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "= is too short ";
        break;
      case "firstName":
        firstNameValid = value.trim().length >= 4;
        fieldValidationErrors.firstName = firstNameValid
          ? ""
          : " name is too short";
        break;
      case "lastName":
        lastNameValid = value.trim().length >= 4;
        fieldValidationErrors.lastName = lastNameValid
          ? ""
          : " name is too short";
        break;
      case "username":
        usernameValid = value.trim().length >= 6;
        fieldValidationErrors.username = usernameValid
          ? ""
          : " must should be atleast 6 char lenghty";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        usernameValid: usernameValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.usernameValid
    });
  }
  submitting = (e, data) => {
    const name = data.name;
    const value = data.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  render() {
    return (
      <div  >
      <div style={{padding:'2%'}}>
        <Link to="/">
        
        <Icon name="arrow circle left" size="big" />
        </Link>
        </div>
       

        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/images/child.png" /> Create New Account
            </Header>
           <FormErrors  formErrors={this.state.formErrors} />
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  onChange={(e, data) => this.submitting(e, data)}
                  fluid
                  name="firstName"
                  value={this.state.firstName}
                  icon="user"
                  error = {this.state.firstName === ""?false:!this.state.firstNameValid}
                  iconPosition="left"
                  placeholder="First Name"
                />

                <Form.Input
                  onChange={(e, data) => this.submitting(e, data)}
                  fluid
                  name="lastName"
                  value={this.state.lastName}
                  icon="user"
                  error = {this.state.lastName === ""?false:!this.state.lastNameValid}
                  iconPosition="left"
                  placeholder="Last Name"
                />
                <Form.Input
                  onChange={(e, data) => this.submitting(e, data)}
                  fluid
                  name="email"
                  error = {this.state.email === ""?false:!this.state.emailValid}
                  value={this.state.email}
                  icon="mail"
                  iconPosition="left"
                  placeholder="Email Id"
                />
                <Form.Input
                  onChange={(e, data) => this.submitting(e, data)}
                  fluid
                  name="username"
                  error = {this.state.username === ""?false:!this.state.usernameValid}
                  value={this.state.username}
                  icon="user"
                  iconPosition="left"
                  placeholder="UserName"
                />
                <Form.Input
                  onChange={(e, data) => this.submitting(e, data)}
                  fluid
                  name="password"
                  error = {this.state.password === ""?false:!this.state.passwordValid}
                  value={this.state.password}
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <SignupReveal
                  button={
                    <Button
                      onClick={this.handlecreat}
                      color="teal"
                      fluid
                      size="large"
                      disabled={!this.state.formValid}
                    >
                      Create Account
                    </Button>
                  }
                />
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SignupForm;
