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
import { Link } from "react-scroll"

import useStyles from './styles'

// PAGES
const PAGES = ["home", "about", "timeline", "testimonials", "cooking", "contact"]

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
                                <Link to={PAGES[i]} smooth={true} duration={1000} >
                                    <ListItemText key={i} primary={page} />
                                </Link>
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