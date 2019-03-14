import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
    Button,
    Container,
    Header,
    Icon,
    Image
} from 'semantic-ui-react'


const HomepageHeading = ({ mobile }) => (
    <Container text>
    <Image fluid style={{position:'absolute',zIndex:'-1'}} src="/images/hands.jpg"/>
        <Header
            as='h1'
            content='RataTyping'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Free typing Certification, Test your typing skills'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button inverted size='huge'>
            Take Test
        <Icon name='right arrow' />
        </Button>
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

export default HomepageHeading