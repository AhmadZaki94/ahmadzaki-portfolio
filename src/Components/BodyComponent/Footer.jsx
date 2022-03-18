import React from 'react'
import {Box, IconButton,}  from '@material-ui/core';
import {useStyles} from "../BodyComponent/BodyStyles"
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

import { Link } from 'react-scroll';
export const Footer = () => {
    const classes = useStyles();
    return (
        
             <Box className = {classes.footerContainer} id='Footer'>
                <IconButton className={classes.iconButton}
                  activeClass='active'
                  to='Header'
                  spy={true}
                  smooth={true}
                  offset={-70}
                    duration={1200}
                    component={Link}
                    
                >
                    <ArrowUpwardRoundedIcon />       
                </IconButton>
            </Box>
        
    )
}


