import {CardMedia, Container, Grid } from '@material-ui/core'
import React from 'react'

const Featured = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2} style={{marginTop:"60px"}}>
                    <Grid item xs={12}>
                       <CardMedia
                        image="/banner.jpg"
                        style={{height: "300px"}}
                        /> 
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Featured
