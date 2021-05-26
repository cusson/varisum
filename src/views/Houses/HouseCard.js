import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: "15px"
    },
    media: {
        height: 140,
    },
});

export default function HouseCard({ house }) {
    const classes = useStyles();

    return (
        <Link to={`/property/${house.id}`} style={{textDecoration:"none"}}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={house.image1}
                    title={house.location}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" align="center">
                        {house.city} {" "} {house.location}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography align="center">
                                {house.bed}
                            </Typography>
                            <Typography align="center">
                                Bed(s)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography align="center">
                                {house.bath}
                            </Typography>
                            <Typography align="center">
                                Bath(s)
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography align="center">
                                {house.garage}
                            </Typography>
                            <Typography align="center">
                                Garage
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography align="center">
                                {house.squareft}
                            </Typography>
                            <Typography align="center">
                                Square ft
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    View
                 </Button>
            </CardActions>
        </Card>
        </Link>
    );
}

