import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { Button, Dimmer, Header, Image, Segment } from "semantic-ui-react";

export default class DimmerResult extends Component {
  state = { active: true };

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  componentDidMount(){
    this.props.server()
  }
  render() {
    let data = this.props.data
    const { active } = this.state;

    return (
      <div>
        <Dimmer.Dimmable
          as={Segment}
          style={{ minHeight: "400px" }}
          dimmed={active}
        >
          <Dimmer
            active={active}
            onClickOutside={this.handleHide}
            verticalAlign="top"
          >
            <Header as="h2" inverted>
              Results
            </Header>
            <div style={{textAlign:'left',marginBottom:'5%'}}>
            <Header as="h3" inverted>
              Speed WPM : <span style={{marginLeft:'4%',float:'right'}}>{data.wpm} WPM</span>
            </Header>
            <Header as="h4" inverted>
            Accuracy : <span style={{marginLeft:'4%',float:'right'}}>{data.accuracy} %</span>
            </Header>
            <Header as="h4" inverted>
            correct : <span style={{marginLeft:'4%',float:'right'}}>{data.correct}</span>
            </Header>
            <Header as="h4" inverted>
            incorrect : <span style={{marginLeft:'4%',float:'right'}}>{data.incorrect}</span>
            </Header>
            <Header as="h4" inverted>
            Total words : <span style={{marginLeft:'4%',float:'right'}}>{data.total}</span>
            </Header>
            <Header as="h4" inverted>
            Typed Char: <span style={{marginLeft:'4%',float:'right'}}>{data.typed}</span>
            </Header>
            </div>
           
            <div style={{marginTop:'3%'}}>
            <Button  color='green'>Get your Certificate</Button>
            <Link to="/typingtest">
            <Button>Take new Test</Button>
            </Link>
            </div>
          </Dimmer>
        </Dimmer.Dimmable>

        {/* <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group> */}
      </div>
    );
  }
}
