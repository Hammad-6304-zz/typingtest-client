import React from 'react'
import { ResponsiveContainer } from '../subComponents/responsiveCon'
import {Route, Link} from "react-router-dom"; 

import { BlogSegment } from '../subComponents/blogSegment'
import Footer from './footer'
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
} from 'semantic-ui-react'

const TypingTest = (props) => (
    <ResponsiveContainer
    content="Typing test"
    subContent="typing subcontect"
    buttonText="Start typing from"
    // color=''
    bgURL = '/images/lightkey.jpg'
    activetest={true}
    loggedin={props.loggedin}
  >
        {/* <Segment style={{ padding: '8em 0em' }} vertical>
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
        <BlogSegment /> */}
        <Segment className="certsSeg" vertical>
            <Grid>
                <Grid.Row textAlign='center'>
                    <Grid.Column >
                        <Container centered="true">
                            <div style={{ maxWidth: '70%', marginLeft: '15%', maxHeight: 'auto' }}><Image centered src="/images/certs.png" /></div>

                            <Segment>
                                <Grid columns={2} stackable relaxed='very'>
                                    <Grid.Column >
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                        <p>
                                            <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                                        </p>
                                    </Grid.Column>
                                </Grid>

                                <Divider vertical>And</Divider>
                            </Segment>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment className="blogCon">
            <Container >
                <Grid columns={2}  padded stackable>
                    <Grid.Column>
                        <Header as='h3' size="large" style={{ fontSize: '1.5em' }} >
                            Why should you take <br />
                            a typing speed test?
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            You can check your typing speed and accuracy online. Compare it with other results in the rankings and increase it using Ratatype. The average typing speed is 40 WPM, try to exceed it!
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            After completing the typing speed test you will receive a certificate that you can attach to your CV or show to your teacher and friends.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' size="large" style={{ fontSize: '1.5em' }} >
                        How do we measure <br />
                        a typing speed?
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                        We measure your typing speed in WPM (words per minute). It is a calculation of how fast you type words with no typos. By the "word" we mean an average of 5 characters including spaces. We measure gross speed in our typing test.                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                        However, we don't allow you to continue typing if you have a typo in your test. You have to fix it to proceed the WPM test.
                        </p>
                </Grid.Column>

                </Grid>
                <Divider/>
                <Grid columns={2} centered  padded stackable>
                    <Grid.Column>
                        <Header as='h3' textAlign='center' size="large" style={{ fontSize: '1.5em' }} >
                        It will take only 2-3 minutes!
                        </Header>
                        <p style={{ fontSize: '1.33em',textAlign:'center' }}>
                        You can practice as much as necessary because you have no limits. <br/>
                        Grab your keyboard and get your typing speed timed!
                        </p>
                        <p style={{ fontSize: '1.33em',textAlign:'center' }}>
                            <Link to="/typingtest/test" >
                            <Button>TAKE A TEST</Button>
                            </Link>
                        </p>
                    </Grid.Column>
                   

                </Grid>
            </Container>
        </Segment>

        <Footer />
    </ResponsiveContainer>
)
export default TypingTest

