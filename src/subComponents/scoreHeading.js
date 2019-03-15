import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'

class ScoreHeading extends React.Component {
    render() {
        return (
            <div>
                <Header as='h2'>
                    <Icon name='chart line' />
                    <Header.Content>
                        High Scores
                    <Header.Subheader>Put your Name on the Top!</Header.Subheader>
                    </Header.Content>
                </Header>
                <div style={{margin:'2%'}}>Please log in and get your typing certificate to enter the typing high scores table.</div>
            </div>
        )
    }
}
export default ScoreHeading