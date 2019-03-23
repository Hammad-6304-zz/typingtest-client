import React from 'react'
import { ResponsiveContainer } from '../subComponents/responsiveCon'
import { BlogSegment } from '../subComponents/blogSegment'
import Footer from './footer'
import {
    Button,
    Grid,
    Header,
    Image,
    Segment
} from 'semantic-ui-react'

const HomepageLayout = (props) => (
    <ResponsiveContainer
    content="Blogs"
    subContent="Read Experts advices "
    // buttonText="start homepage"
    buttonText = "hide"
    // color=''
    bgURL = '/images/handsshade.jpg'
    activehome={true}
    loggedin={props.loggedin}
  >
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h1' size="huge" style={{ fontSize: '3em' }} >
                            What Is Touch Typing?
            </Header>

                        <p style={{ fontSize: '1.33em' }}>
                            Touch typing is the ability to use muscle memory to find keys fast, without using the sense of sight, and with all the available fingers, just like piano players do. It significantly improves typing speed and eliminates errors. Touch typing simply makes you more productive and it is a skill worth learning. However, many people engage in the bad habit of ‘hunt-and-peck’ typing, even those seasoned professionals with years and decades of computer experience. It  is easy to understand, though, as touch typing requires dedicated practice to  learn it well.

                            That is why we created Keybr.com, a free online typing tutorial, to give you the most advanced learning experience and let you develop your typing skills faster.
            </p>

                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/bg.png' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button color="black" size='huge'>Start Learning</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <BlogSegment />
        <Footer />
    </ResponsiveContainer>
)
export default HomepageLayout

