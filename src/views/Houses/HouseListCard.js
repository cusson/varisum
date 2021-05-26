import React, { useEffect } from "react";
import {  makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import  Grid  from "@material-ui/core/Grid";
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProperties } from "../../actions/property";
import _ from 'lodash'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "15px",
  },
  media: {
    height: 140,
  },
});

const HouseListCard = ({ house, fetchProperties }) => {
  const classes = useStyles();
  

  // useEffect(() => {
  //   fetchProperties();
  // }, [fetchProperties]);



  return (
    <>
      {!house ? (
        <Box>Loading properties list...</Box>
      ) : (
        _.uniq(house, 'id').slice(0, house.length).map((house) => (
          <Grid item xs={12} sm={6} md={4} key={house.id}>
            <Fade in={true}>
            <Link
              to={`/property/${house.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={house.image1}
                    title={house.location}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      align="center"
                    >
                      {house.city} {house.location}
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item xs={3} sm={3} md={3}>
                        <Typography align="center">{house.bed}</Typography>
                        <Typography align="center">Bed(s)</Typography>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Typography align="center">{house.bath}</Typography>
                        <Typography align="center">Bath(s)</Typography>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Typography align="center">{house.garage}</Typography>
                        <Typography align="center">Garage</Typography>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3}>
                        <Typography align="center">{house.squareft}</Typography>
                        <Typography align="center">Sq ft</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Link>
            </Fade>
          </Grid>
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    house: Object.values(state.property),
  };
};
export default connect(mapStateToProps, { fetchProperties })(HouseListCard);
