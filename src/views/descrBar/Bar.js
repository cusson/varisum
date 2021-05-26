import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

const Bar = () => {
    return (
        <>
            <Container maxWidth="lg" style={{marginTop:"15px", background:"#eee"}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" style={{marginTop: "20px"}} gutterBottom align="center" color="primary">Property is our Business</Typography>
                        <Typography variant="subtitle1" align="center" gutterBottom>
                            Find Houses for Sale in Harare, Bulawayo, Gweru, Mutare, Victoria Falls .. all over Zimbabwe Contact us and get a Free Quote
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Bar
