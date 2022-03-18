//react reusable components==>

import React from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../HeaderComponents/HeaderStyles";


export const Decoration = ({ label, withIcon, arrowLogo, isAlign }) => {
    const classes = useStyles();
    return (
        <Box className={classes.decorator} style={isAlign ? { width: "100px", margin: "10px auto", alignItems: "center"} : null}>
        <Typography component="span" className={classes.decoratorText}>
            {label}
        </Typography>
        {withIcon ?  <Typography component="span" className={classes.arrow}>
            {arrowLogo}
        </Typography> : null}
       
    </Box>
    )
}
