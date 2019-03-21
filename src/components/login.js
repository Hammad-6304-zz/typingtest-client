import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class LoginForm extends React.Component {
  state = { username: "", password: "", nav: false,logStatus :false };

  handleSubmit = () => {
    console.log(this.state.username, "pass", this.state.password);
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
        // console.log(message);
        if(message=="Unauthorized"){
          alert("woridn details")
        }else if(message == "Bad Request"){
          alert("filll both form ")
        }
        else{
          let data1 = JSON.parse(message);
          delete data1.userData.time
          delete data1.userData.date
          delete data1.userData._id
          delete data1.userData.password
       
          sessionStorage.setItem("status", JSON.stringify(data1));
          console.log(data1)
          
          // sessionStorage.setItem("status", message);
          this.reload()
        }
        
      })
      .catch(error =>console.log(error));
    // window.location.reload();
    
  };
  reload = ()=>{
    setTimeout(() => {
      // this.setState({ nav: true });
      window.location.reload()  
    }, 500);
  }
  username = (e, data) => {
    this.setState({ username: data.value });
  };
  password = (e, data) => {
    this.setState({ password: data.value });
  };
  componentDidMount(){
    if(sessionStorage.getItem("status")){
      this.setState({logStatus:true})

    }
  }

  render() {
    return (
      <div>
        {this.state.logStatus == false ?
          <div className="login-form" style={{ height: "100%", marginTop: "15%" }}>
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
              <Image src="/images/child.png" /> Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
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

                {/* <Link to='/'> */}
                <Button
                  onClick={this.handleSubmit}
                  color="teal"
                  fluid
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
            <Link to='signup'><Button color="violet" size="large" fluid>New to us? SignUp</Button></Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>:<div style={{textAlign:'center'}}>
      <h1 style={{textAlign:'center',marginTop:'10%',fontSize:'50px'}}>your are logged in</h1>
      <Link to="/"><Button color="red">Back to home</Button></Link>
      </div>
    }
      </div>
      );
  }
}

export default LoginForm;
