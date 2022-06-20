import React, { useState } from 'react'

import {
    AppBar,
    Toolbar,
    Tabs,
    Tab,
    Button,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core'

import { Link } from "react-scroll"

import DrawerComponent from './DrawerComponent'
import useStyles from './styles'

function Header() {
    const [value, setValue] = useState()
    const classes = useStyles()
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>

            <AppBar className={classes.headerContainer}>

                <Toolbar>
                    {/* if it's smaller than md screen size */}
                    {
                        isMatch ? (
                            <>
                                <Typography className={classes.title}>
                                    Medic Care
                                </Typography>
                                <DrawerComponent />
                            </>
                        ) : (
                            <>

                                {/* if it's greater than md screen size */}
                                <Tabs
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                    indicatorColor="primary"
                                >
                                    <Link to="/" smooth={true} duration={1000} >
                                        <Tab label="Home" />
                                    </Link>

                                    <Link to="about" smooth={true} duration={1000} >
                                        <Tab label="About" />
                                    </Link>

                                    <Link to="timeline" smooth={true} duration={1000} >
                                        <Tab label="Timeline" />
                                    </Link>

                                    <div>
                                        <Typography className={classes.title}>Medic Care</Typography>
                                        <Typography className={classes.sectitle}>Health Specialist</Typography>
                                    </div>


                                    <Link to="/" smooth={true} duration={1000} >
                                        <Tab label="Testimonials" />
                                    </Link>

                                    <Link to="booking" smooth={true} duration={1000} >
                                        <Tab label="Booking" />
                                    </Link>

                                    <Link to="contact" smooth={true} duration={1000} >
                                        <Tab label="Contact" />

                                    </Link>
                                </Tabs>

                                {/* <Button className={classes.buttonOne} variant='contained'>Login</Button>
                                <Button className={classes.buttonTwo} variant='contained'>Register</Button> */}
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>

        </ >
    )
}

export default Header