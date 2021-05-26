import { Container, Divider, Typography } from '@material-ui/core'
import React from 'react'
import HouseCard from './HouseCard'
import { house } from '../../data/houses'

const HomeContainer = () => {
    return (
        <>
           <Container maxWidth="lg" style={{marginTop: "35px"}}>
               <Typography variant="h4" gutterBottom>Recent Properties</Typography>
               <Divider />
               <Typography variant="h6" gutterBottom color="primary">A few of our favourites, selected for you.</Typography>
               {
                   house.map((house,index)=> (
                      <HouseCard key={index} house={house} /> 
                   ))
               }
               
            </Container> 
        </>
    )
}

export default HomeContainer
