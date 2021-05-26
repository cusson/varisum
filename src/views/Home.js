import { Container } from '@material-ui/core'
import React from 'react'
import ChooseUs from './chooseUs/ChooseUs'
import Bar from './descrBar/Bar'
import Featured from './featureHouse/Featured'
import HomeContainer from './Houses/HomeContainer'

const Home = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Featured />
                <Bar />
                <HomeContainer />
                <ChooseUs />
            </Container>
        </>
    )
}

export default Home
