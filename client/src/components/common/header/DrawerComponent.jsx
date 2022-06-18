import React, { useState } from 'react'
import {
    makeStyles,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton
} from '@material-ui/core'

import MenuOpenIcon from '@material-ui/icons/MenuOpen'

import useStyles from './styles'

// PAGES
const PAGES = ["Home", "About", "Timeline", "Testimonials", "Booking", "Contact"]

function DrawerComponent() {
    const [openDrawer, setOpenDrawer] = useState(false)
    const classes = useStyles()

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List component="nav">
                    {
                        PAGES.map((page, i) => (
                            <ListItem button>
                                <ListItemText key={i} primary={page} />
                                <Divider />
                            </ListItem>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton className={classes.menuBtn} onClick={() => setOpenDrawer(!openDrawer)} >
                <MenuOpenIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent