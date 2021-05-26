import { Container, Divider, Grid, Typography, Box } from "@material-ui/core";
import React, {useEffect} from "react";
import HouseListCard from "./HouseListCard";
import {connect} from 'react-redux'
import {fetchProperties} from '../../actions/property'

const HouseList = ({house, fetchProperties}) => {

  useEffect(()=> {
    fetchProperties()
  },[fetchProperties])

  return (
    <>
      <Container maxWidth="lg">
        <Grid spacing={3} container>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Available Properties
            </Typography>
            <Divider />
          </Grid>
          {
            !house?<Box>Loading properties....</Box>: <HouseListCard house={house} />
          }
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  return {
      house: Object.values(state.property)
  }
}

export default connect(mapStateToProps, {fetchProperties})(HouseList)
