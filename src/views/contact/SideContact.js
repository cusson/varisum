import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 50,
    width: 50,
    margin: "2px auto",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  social: {
    display: "flex",
    justifyContent: "center",
  },
  socialMedia: {
    height: 40,
    width: 40,
    margin: "2px 5px",
  },
  contactDetail: {
    fontWeight: "200",
  },
  sideMedia: {
    height: 100,
    width: 110,
    margin: "2px auto",
  },
}));

const SideContact = () => {
  const classes = useStyles();
  return (
    <>
      <Card style={{ marginBottom: "15px" }}>
        <Typography align="center" variant="h6" style={{ marginTop: "10px" }}>
          Contact Agent
        </Typography>
        <CardContent className={classes.contact}>
          <CardMedia
            className={classes.media}
            title="Contact Agent"
            image="/wa.png"
          />
          <Typography
            align="center"
            variant="subtitle1"
            className={classes.contactDetail}
          >
            Amos Saunyama
          </Typography>
          <Typography
            align="center"
            variant="subtitle2"
            className={classes.contactDetail}
            gutterBottom
          >
            0772 316 414
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            className={classes.contactDetail}
          >
            Langelihle Saunyama
          </Typography>
          <Typography
            align="center"
            variant="subtitle2"
            className={classes.contactDetail}
            gutterBottom
          >
            0783 558 645
          </Typography>
          <CardMedia
            className={classes.media}
            title="Email"
            image="/email.png"
          />
          <Typography
            align="center"
            variant="subtitle2"
            className={classes.contactDetail}
            gutterBottom
          >
            info@varisumpropertieszimbabwe.co.zw
          </Typography>
        </CardContent>
      </Card>

      <Card style={{ marginBottom: "15px" }}>
        <Typography align="center" variant="h6" style={{ marginTop: "10px" }}>
          Follow us
        </Typography>
        <CardContent className={classes.social}>
          <a
            href="https://www.facebook.com/varisumpropertieszimbabwe"
            target="_blank"
            rel="noreferrer"
          >
            <CardMedia
              className={classes.socialMedia}
              title="facebook"
              image="/fb.png"
            />
          </a>
          <a
            href="https://www.instagram.com/varisumpropertieszimbabwe"
            target="_blank"
            rel="noreferrer"
          >
            <CardMedia
              className={classes.socialMedia}
              title="Instagram"
              image="/in.png"
            />
          </a>
        </CardContent>
      </Card>

      <Card>
        <CardContent className={classes.contact}>
          <CardMedia
            className={classes.sideMedia}
            title="View More properties"
            image="/side.jpg"
          />
          <Typography
            align="center"
            variant="subtitle2"
            style={{ marginTop: "20px", fontWeight: "600" }}
            gutterBottom
            color="primary"
          >
            View All Properties for Sale
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SideContact;
