import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { useStyles as bodyStyles } from "../BodyComponent/BodyStyles"

import { Decoration } from './Decoration'

export const DividerLine = ({ isAlign }) => {
     const classes = bodyStyles();
     //console.log(isAlign)
    return (
        <Box className={classes.DividerLine} style={isAlign ? {margin:"16px auto"} : {margin:"16px 0px"}} >

        </Box>
    )
}
 


export const CommonHeaderSection = ({ label, headingBig, headingSmall, isAlign, withIcon, arrowLogo}) => {
    //decoration
    //heading section
    //line
    //deccription
    const classes = bodyStyles();
    return (
        <Box className={classes.CommonHeaderSectionCont}>
            <Decoration label={label} withIcon={withIcon} isAlign={isAlign} arrowLogo={arrowLogo}/>
            <Typography variant="h4" className={classes.headingBig} align={isAlign ? "center" : "left"}>
                {headingBig}
            </Typography>
            <DividerLine isAlign={isAlign}/>
            <Typography variant="body1" component="h6" align={isAlign ? "center" : "left"} className={classes.headingSmall}>
                {headingSmall}
            </Typography>
        </Box>
    )
}
