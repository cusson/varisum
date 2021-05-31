import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import HotelIcon from "@material-ui/icons/Hotel";
import BathtubIcon from "@material-ui/icons/Bathtub";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProperties } from "../../actions/property";
import _ from "lodash";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginTop: "15px",
    boxShadow: "0px 1px 1px 0px rgba(0,0,0,0.75)",
    "&:hover": {
      boxShadow: "0px 1px 11px 0px rgba(0,0,0,0.75)",
    },
  },
  media: {
    height: 310,
  },
  specification: {
    display: "flex",
    justifyContent: "center",
  },
  spec: {
    fontWeight: 200,
  },
});

const NewCard = ({ house, fetchProperties }) => {
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
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={house.image1}
                      title={house.location}
                    />
                    <CardContent>
                      <Grid container spacing={1} style={{ display: "flex" }}>
                        <Typography align="center" variant="h5" color="primary">
                          USD ${house.cost}
                        </Typography>

                        <Typography
                          align="center"
                          variant="subtitle1"
                          style={{ marginLeft: "15px" }}
                        >
                          {house.bed} Bedroom {house.type} in {house.city}{" "}
                          {house.location}
                        </Typography>
                      </Grid>
                      <Grid container spacing={1} style={{ marginTop: "8px" }}>
                        <Grid
                          item
                          xs={3}
                          sm={3}
                          md={3}
                          className={classes.specification}
                        >
                          <HotelIcon style={{ marginRight: "8px" }} />{" "}
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
                          <SquareFootIcon style={{ marginRight: "8px" }} />
                          <Typography
                            align="center"
                            variant="subtitle1"
                            color="primary"
                            className={classes.spec}
                          >
                            {house.squareft}{" "} {house.mType}
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
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
export default connect(mapStateToProps, { fetchProperties })(NewCard);
