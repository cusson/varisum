import { Box, CardMedia, Container, Divider, Grid, Typography } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from 'react'

const Footer = () => {
    return (
        <>
            <Container maxWidth="lg" style={{ marginTop: "40px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} >
                        <Typography variant="h5" gutterBottom align="center">Contact Us</Typography>
                        <Divider />
                        <Typography variant="subtitle1" style={{ marginTop: "15px" }}  align="center">
                           <PhoneIcon /> Phone: +263 772 316 414
                        </Typography>
                        <Typography variant="subtitle1" style={{ marginTop: "15px" }} align="center">
                            <EmailIcon />{" "}info@varisumpropertieszimbabwe.co.zw
                        </Typography>
                        <Typography variant="subtitle1" style={{ marginTop: "15px" }} align="center">
                            <LocationOnIcon /> <br />
                            110 Centernary,<br />
                            Building 9th Avenue and Hebert Chitepo<br />
                            Bulawayo<br />
                            Zimbabwe
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom align="center">Follow Us</Typography>
                        <Divider />
                        <Box style={{display:"flex",justifyContent:"center", margin:"15px auto"}}>
                        <a href="https://www.facebook.com/varisumpropertieszimbabwe" target="_blank" rel="noreferrer">
                             <CardMedia
                            image="/fb.png"
                            style={{height:40, width:40, marginTop:"20px", margin:"0px 10px"}}
                         /> 
                        </a>
                        
                         <a href="https://www.instagram.com/varisumpropertieszimbabwe" target="_blank" rel="noreferrer">
                           <CardMedia
                            image="/in.png"
                            style={{height:40, width:40, marginTop:"20px", margin:"0px 10px"}}
                         />
                         </a>     
                        </Box>
                    </Grid>
                    <Grid item xs={12}> 
                        <Typography variant="subtitle1" align="center" color="primary">
                            Varisum Properties Zimbabwe @{new Date().getFullYear()}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footer
