import React from 'react'
import { Header,  Icon } from 'semantic-ui-react'
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
                <div style={{margin:'2%'}}>Please Take a free <b>TypingTest</b>, and break the records</div>
            </div>
        )
    }   
}
export default ScoreHeading