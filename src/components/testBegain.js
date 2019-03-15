import React from "react";
import { ResponsiveContainer } from "../subComponents/responsiveCon";
import { BlogSegment } from "../subComponents/blogSegment";
import Footer from "./footer";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon
} from "semantic-ui-react";

class TestBegain extends React.Component {
  render() {
    return (
      <div>
        <Grid columns="equal" stackable>
          <Grid.Column width="3">hell</Grid.Column>
          <Grid.Column>
            <Segment
              style={{
                background: "#55C5FF",
                fontSize: "1.7em",
                padding: "5%",
                color:'white'
              }}
            >
              <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                sit, qui beatae, minus tenetur nihil officia nisi officiis
                laborum voluptate ut pariatur! Porro, quidem quia sapiente omnis
                explicabo, sint tenetur veritatis atque in beatae rerum
                laudantium. Facere expedita eum accusantium deserunt nihil
                mollitia voluptatem voluptate minima fugit laboriosam, 
              </p>
             <div></div>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width="3">hell</Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default TestBegain;
