import { Container, Divider, Grid, Typography } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from 'react'

const Contact = () => {
    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: "15px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                        <Typography variant="h5" gutterBottom align="center">Contact Us</Typography>
                        <Divider />
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" style={{ marginTop: "15px" }} align="center">
                            <WhatsAppIcon /> {" "}
                             +263 772 316 414
                        </Typography>
                        <Typography variant="subtitle1" style={{ marginTop: "15px" }} align="center">
                            <PhoneIcon /> {" "}
                             +263 772 316 414
                        </Typography>
                        <Typography variant="subtitle1" style={{ marginTop: "15px" }} align="center">
                            <EmailIcon /> {" "}
                             +263 772 316 414
                        </Typography>
                            <Typography variant="subtitle1" style={{ marginTop: "15px" }} align="center" gutterBottom>
                                <LocationOnIcon /><br />
                            110 Centernary,<br />
                            Building 9th Avenue and Hebert Chitepo<br />
                            Bulawayo<br />
                            Zimbabwe
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Contact
