import { Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check';
import React from 'react'

const ChooseUs = () => {
    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: "45px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <img src="/about.jpg" width="400" height="350" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>Who We Are</Typography>
                        <Typography variant="subtitle1" align="justify" style={{ marginBottom: "10px" }}>
                            Varisum Properties & Construction is a diversified real estate and construction company providing a vast array of services.
                            Established in 2006 and spearheaded by a team of professionals, the company provides a variety of real estate related services including property sales,
                            evaluation, acquisations, entitlements and construction of all types of commercial and residential properties throughout Zimbabwe.
                       </Typography>
                        <Typography variant="h5">Why Choose Us?</Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem>
                                <ListItemIcon><CheckIcon /></ListItemIcon>
                                <ListItemText primary="Years of Experience" />
                                <ListItemText primary="Free Consultation" />
                                <ListItemText primary="Satisfied Customers" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon><CheckIcon /></ListItemIcon>
                                <ListItemText primary="Cost Control Experts" />{" "}
                                <ListItemText primary="100% Satisfaction Guarantee" />{" "}
                                <ListItemText primary=" Affordable Pricing" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ChooseUs
