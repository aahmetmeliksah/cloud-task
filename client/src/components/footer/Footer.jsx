import React from 'react'
import { Container, Grid, Box } from "@material-ui/core"
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'

import useStyles from './footerStyles.js'

function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.footerContainer} id="contact">

  
        <Grid container spacing={5}>


            <Grid item xs={12} sm={4}>
                <Box sx={{ p: 3, borderBottom: '1px solid grey', display:"flex" }}>Opening Hours</Box>
                <Box sx={{ p: 3,  display:"flex" }}>Monday, Tuesday - Firday 8:00 AM - 3:30 PM</Box>
                <Box sx={{ p: 3,  display:"flex" }}>Saturday 10:30 AM - 5:30 PM</Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={{ p: 3, borderBottom: '1px solid grey', display:"flex" }}>Our Clinic</Box>
                <Box sx={{ p: 3,  display:"flex" }}>hello@company.com</Box>
                <Box sx={{ p: 3,  display:"flex" }}>123 Digital Art Street, San Diego, CA 92123</Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box sx={{ p: 3, borderBottom: '1px solid grey', display: "flex" }}>Socials</Box>
                <div className="icons" style={{display: "flex", justifyContent:"space-evenly", marginTop: "1rem"}}>
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <SubscriptionsIcon/>
                </div>
                <Box sx={{ p: 3,  display:"flex" }}>Copyright © Medic Care 2021</Box>
                <Box sx={{ p: 3,  display:"flex" }}>Design: TemplateMo</Box>
                <Box sx={{ p: 3,  display:"flex" }}>Distributed By: Themewagon</Box>
            </Grid>

        </Grid>
   

                
        </footer>
    )
}

export default Footer