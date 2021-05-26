import { Container, Grid } from '@material-ui/core'
import React from 'react'
import HouseCard from './HouseCard'
import { house } from '../../data/houses'

const HouseList = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid spacing={3} container>
                    <Grid item xs={12} md={4}>
                        {
                            house.map((house, index) => (
                                <HouseCard key={index} house={house} />
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default HouseList
