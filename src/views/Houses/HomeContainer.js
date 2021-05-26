import { Box, Container, Divider, Grid, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import HouseCard from './HouseCard'
import {connect} from 'react-redux'
import {fetchProperties} from '../../actions/property'


const HomeContainer = ({house, fetchProperties}) => {

    useEffect(()=>{
        fetchProperties()
    },[fetchProperties])

    return (
        <>
           <Container maxWidth="lg" style={{marginTop: "35px"}}>
               <Typography variant="h4" gutterBottom>Recent Properties</Typography>
               <Divider />
               <Typography variant="h6" gutterBottom color="primary">A few of our favourites, selected for you.</Typography>
               <Grid container spacing={3}>
                   {
                      !house?<Box>Loading available properties</Box>: <HouseCard house={house} /> 
                   }
               </Grid>
            </Container> 
        </>
    )
}

const mapStateToProps = state => {
    return {
        house: Object.values(state.property)
    }
}

export default connect(mapStateToProps, {fetchProperties})(HomeContainer)
