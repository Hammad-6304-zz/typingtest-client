import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Header,Icon,
  List,
  Segment
} from "semantic-ui-react";

class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Gamica Typing Test" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Contact Us
                </Header>
                <Link to='https://www.facebook.com/Hamaad.100'>
                <Button circular color="facebook"  ><Icon name="facebook"/> Facebook</Button>
                </Link>
                <Link to="https://www.instagram.com/mr._.chips/?hl=en">
                <Button circular color="instagram"  ><Icon name="instagram"/> instagram</Button>
                </Link>
                <Button disabled circular color="twitter"  ><Icon name="twitter"/> Twitter</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
export default Footer;
