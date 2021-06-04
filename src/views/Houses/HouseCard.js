import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import HotelIcon from "@material-ui/icons/Hotel";
import BathtubIcon from "@material-ui/icons/Bathtub";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProperties } from "../../actions/property";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: 810,
    marginBottom: "10px",
    boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.75)",
    "&:hover": {
      boxShadow: "0px 1px 11px 0px rgba(0,0,0,0.75)",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: 300,
    height: 230,
  },
  specification: {
    display: "flex",
    justifyContent: "center",
  },
  spec: {
    fontWeight: 200,
  },
}));

const HouseCard = ({ house, fetchProperties }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return (
    <>
      {!house ? (
        <Box>Loading properties list...</Box>
      ) : (
        _.uniq(house, "id")
          .slice(0, 3)
          .map((house) => (
            <Box key={house.id}>
              <Link
                to={`/property/${house.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={house.image1}
                    title={house.location}
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography align="left" variant="h5" color="primary" gutterBottom>
                        USD ${house.cost}
                      </Typography>
                      <Typography align="left" variant="subtitle1">
                        {house.bed} Bedroom {house.type}
                      </Typography>
                      <Grid container spacing={3} >
                        <Grid item xs={12} style={{ display: "flex", marginTop: "15px" }}>
                         <LocationOnIcon style={{ marginRight: "8px" }} />{" "}
                        <Typography
                          align="center"
                          variant="subtitle1"
                          color="primary"
                          // className={classes.spec}
                        >
                          {house.city} {house.location}
                        </Typography> 
                        </Grid>
                      </Grid>
                      
                      <Grid container spacing={3} >
                        <Grid item xs={12} style={{ display: "flex", marginTop: "15px" }}>
                        <Typography
                          align="justify"
                          variant="subtitle1"
                          color="primary"
                          style={{lineHeight:"10px"}}
                        >
                          
                        </Typography> 
                        </Grid>
                      </Grid>
                      
                      <Grid container spacing={1} style={{ marginTop: "15px" }}>
                        <Grid item xs={12}>
                        <hr style={{color:"#eee"}}/>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={3}
                          md={3}
                          className={classes.specification}
                        >
                          <HotelIcon style={{ marginRight: "8px" }} />
                          <Typography
                            align="center"
                            variant="subtitle1"
                            color="primary"
                            className={classes.spec}
                          >
                            {house.bed}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={3}
                          md={3}
                          className={classes.specification}
                        >
                          <BathtubIcon style={{ marginRight: "8px" }} />
                          <Typography
                            align="center"
                            variant="subtitle1"
                            color="primary"
                            className={classes.spec}
                          >
                            {house.bath}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={3}
                          md={3}
                          className={classes.specification}
                        >
                          <DriveEtaIcon style={{ marginRight: "8px" }} />
                          <Typography
                            align="center"
                            variant="subtitle1"
                            color="primary"
                            className={classes.spec}
                          >
                            {house.garage}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={3}
                          sm={3}
                          md={3}
                          className={classes.specification}
                        >
                          <SquareFootIcon style={{ marginRight: "8px" , marginLeft:"5px"}} />
                          <Typography
                            align="center"
                            variant="subtitle1"
                            color="primary"
                            className={classes.spec}
                          >
                            {house.squareft}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <div></div>
                  </div>
                </Card>
              </Link>
            </Box>
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
export default connect(mapStateToProps, { fetchProperties })(HouseCard);
