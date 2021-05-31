import { Box, Container, Divider, Grid, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import HouseCard from './HouseCard'
import {connect} from 'react-redux'
import {fetchProperties} from '../../actions/property'
import SideContact from '../contact/SideContact'


const HomeContainer = ({house, fetchProperties}) => {

    useEffect(()=>{
        fetchProperties()
    },[fetchProperties])

    return (
        <>
           <Container maxWidth="lg" style={{marginTop: "35px"}}>
               <Typography variant="h4" component="h1" gutterBottom>Property for Sale in Zimbabwe</Typography>
               <Divider />
               <Typography variant="subtitle1" component="h2" gutterBottom style={{fontWeight:"150"}}>A few of our favourites, selected for you.</Typography>
               <Grid container spacing={3}>
                   <Grid item xs={12} sm={12} md={8}>
                       {
                      !house?<Box>Loading available properties</Box>: <HouseCard house={house} /> 
                   } 
                   </Grid>
                   <Grid item xs={12} md={4} >
                       <SideContact />
                   </Grid>
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
