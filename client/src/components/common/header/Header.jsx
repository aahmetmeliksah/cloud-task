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
                                    <Tab label="Home" />
                                    <Tab label="About" />
                                    <Tab label="Timeline" />

                                    <div>
                                        <Typography className={classes.title}>Medic Care</Typography>
                                        <Typography className={classes.sectitle}>Health Specialist</Typography>
                                    </div>

                                    <Tab label="Testimonials" />
                                    <Tab label="Booking" />
                                    <Tab label="Contact" />
                                </Tabs>

                                {/* <Button className={classes.buttonOne} variant='contained'>Login</Button>
                                <Button className={classes.buttonTwo} variant='contained'>Register</Button> */}
                            </>
                        )
                    }

                </Toolbar>

            </AppBar>
        </>
    )
}

export default Header