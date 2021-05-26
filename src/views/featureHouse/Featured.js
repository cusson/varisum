import {CardMedia, Container, Grid } from '@material-ui/core'
import React from 'react'

const Featured = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2} style={{marginTop:"5px"}}>
                    <Grid item xs={12}>
                       <CardMedia
                        image="/home.jpeg"
                        style={{height: "500px"}}
                        /> 
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Featured
