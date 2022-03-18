import { Typography } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'
import { useStyles } from "../BodyComponent/BodyStyles"
import Link from '@material-ui/core/Link';
export const CardMedia = ({ Icon, label, desc, isIcon }) => {
    
    const classes = useStyles();
    return (
        <Grid container spacing={4} style={{marginTop:"10px"}}>
            <Grid item xs={4} className = {classes.avatarCont}>
                <Avatar className={classes.avatar}>
                    {isIcon ?  Icon  : <img src={Icon} alt="Pto" className={classes.avtImg} />}
                  
                </Avatar>
            </Grid>
            <Grid item xs={8}  className={classes.cardMediaCont}>
                <Typography variant="body1" coponent="h6" className={classes.carditemtext}> <Link href={desc} target="_blank" underline="hover" style={{color:"#fff"}}>{label} </Link></Typography>
                {/* <Typography variant="caption">{ desc }</Typography> */}
            </Grid>
        </Grid>
    )
}
