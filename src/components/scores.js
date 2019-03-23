import React from 'react'
import { ResponsiveContainer } from '../subComponents/responsiveCon'
import ScoreTabs from '../subComponents/scoreTabs'
import ScoreHeading from '../subComponents/scoreHeading'
import Footer from './footer'
import {
    Container,
    Grid,
    Segment
} from 'semantic-ui-react'
const Score = (props) => (
    <div>
          <ResponsiveContainer
      content="scores"
      subContent="Millions of users are in ranking"
      buttonText="hide"
      bgURL = '/images/scoresshade.jpg'
      activescore={true}
      loggedin={props.loggedin}
    >
       
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

