import React from 'react'
import { ResponsiveContainer } from '../subComponents/responsiveCon'
import ScoreTable from '../subComponents/scoreTable'
import ScoreTabs from '../subComponents/scoreTabs'
import { BlogSegment } from '../subComponents/blogSegment'
import ScoreHeading from '../subComponents/scoreHeading'
import AppBar from '../subComponents/navbar'
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
let color = '#'+55+'ACEE';
const Score = (props) => (
    <div>
          <ResponsiveContainer
      content="scores"
      subContent="scores sub"
      buttonText="button scores"
    //   color=''
      bgURL = '/images/scoresshade.jpg'
      activescore={true}
      loggedin={props.loggedin}
    >
        {/* <AppBar /> */}

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
        <Segment vertical>
            <Grid>
                <Container className='tableOfScore'>

                    <Grid.Column >
                        <ScoreHeading />
                        <ScoreTabs />
                    </Grid.Column>
                </Container>
            </Grid>
        </Segment>

        <Footer />
        </ResponsiveContainer>
                </div>
)
export default Score

