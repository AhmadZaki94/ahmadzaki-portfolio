import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import Hidden from '@material-ui/core/Hidden';
import { useStyles } from "./HeaderStyles";
import { Link } from 'react-scroll';
export const NavBar = ({navlinks,handleDrawer}) => {
    const classes = useStyles();
   
    return (
        <AppBar position="fixed" className={classes.navbar}>
        <Toolbar className={classes.toolbar}>
        
          <Typography variant="h5" component="h4" style={{fontWeight:"bolder"}}>
            Portfolio
          </Typography>
               
                <Box component={Hidden} xsDown>
                    <Box>
                    {navlinks.map((item, i) =>
                    (
                        <Button className={classes.navlinks} key={i}
                            activeClass='active'
                            to={`${item.Id}`}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            color = 'inherit'
                            component={Link}
                        >{item.label}</Button>
                    ))}
                    </Box>
                </Box>
                
                <Box component={Hidden} smUp >
                    <IconButton color="inherit" onClick={handleDrawer}>
                       <MenuOpenRoundedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            
            
      </AppBar>
    )
}
//  <IconButton edge="start"  color="inherit" aria-label="menu">
// <MenuIcon />
// </IconButton>