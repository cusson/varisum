import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProperty } from "../../actions/property";
// import history from "../../history";
// import { house } from "../../data/houses";
import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import Gallery from "./Gallery";
import { makeStyles } from "@material-ui/core/styles";
import LocalHotelIcon from "@material-ui/icons/LocalHotel";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import BathtubIcon from "@material-ui/icons/Bathtub";
import BorderOuterIcon from "@material-ui/icons/BorderOuter";
import HouseCard from "./HouseCard";

const useStyles = makeStyles((theme) => ({
  specsData: {
    padding: "0px 30px",
    marginTop: "40px",
  },
}));

const HouseDetail = ({ house, fetchProperty, match }) => {
  const classes = useStyles();

  const { id } = match.params;

  useEffect(() => {
    fetchProperty(id);
  }, [fetchProperty, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "25px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Property Details
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        {!house ? (
          <Box>
            <Typography>Loading Property data...</Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">City :-{house.city}</Typography>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Gallery images={house.images} />
              </Grid>
              <Grid item xs={12} md={4}>
                {/* <HouseCard /> */}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" gutterBottom>
                Details
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h5" component="h2">
                Key Specifications
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Box className={classes.specsData}>
                <Typography>{house.bed} Bed(s)</Typography>
                <LocalHotelIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Box className={classes.specsData}>
                <Typography>{house.bath} Bath(s)</Typography>
                <BathtubIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Box className={classes.specsData}>
                <Typography>Garage(s)</Typography>
                <DriveEtaIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <Box className={classes.specsData}>
                <Typography>{house.squareft} Square ft</Typography>
                <BorderOuterIcon fontSize="large" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h5" gutterBottom>
                Description
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="subtitle1" align="justify">
                {house.description}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state, OwnProps) => {
  return {
    house: state.property[OwnProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchProperty })(HouseDetail);
