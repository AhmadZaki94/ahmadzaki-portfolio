import React from 'react'
import { Drawer } from '@material-ui/core';
import { useStyles } from "./HeaderStyles";
import { Box,List,ListItem,ListItemText } from '@material-ui/core';
import { Link } from 'react-scroll';


export const MyDrawer = ({ handleDrawer, initial, navlinks }) => {
    const classes = useStyles()
    return (
        <Drawer open={initial} anchor='left' onClose={handleDrawer} className={classes.drawer}>
            <Box className={classes.drawerWrapper}>
                <List style={{paddingTop:"30px"}}>
                    {navlinks.map((item, i) => {
                        return (
                            <ListItem key={i} className={classes.listItems}
                            activeClass='active'
                            to={`${item.Id}`}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            color = 'inherit'
                            component={Link}
                            >
                                <ListItemText>
                                     {item.label}
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </Box>
        </Drawer>
    )
}
