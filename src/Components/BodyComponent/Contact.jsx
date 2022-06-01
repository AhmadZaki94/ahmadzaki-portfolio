import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Grid from "@material-ui/core/Grid"
import Hidden from '@material-ui/core/Hidden'
import image from "../../Images/portfoliocontactus.jpg"
import {useStyles} from "../BodyComponent/BodyStyles"
import { CommonHeaderSection } from '../CommonComponents/CommonHeaderSection'
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import { CardMedia } from "../CommonComponents/CardMedia"
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from '@material-ui/core/Link';
import ReorderRoundedIcon from '@material-ui/icons/ReorderRounded';


export const Contact = () => {
    const classes = useStyles();
    const cardMediaArr = [
        {
            Icon: <Link href="tel:+919673583483" target="_blank" underline="hover" style={{color:"#fff"}}><CallRoundedIcon/></Link>,
            label: "Mobile",
            desc:"tel:+919673583483"
        },
        {
           Icon: <Link href="mailto:shaikhzaki8@gmail.com" target="_blank" underline="hover" style={{color:"#fff"}}><MailRoundedIcon/></Link>,
           label: "Email",
           desc:"mailto:shaikhzaki8@gmail.com"
        },
        {
           Icon: <Link href="https://github.com/AhmadZaki94" target="_blank" underline="hover" style={{color:"#fff"}}><GitHubIcon/></Link>,
           label: "GitHub",
           desc:"https://github.com/AhmadZaki94"
        },
        {
           Icon: <Link href="https://www.linkedin.com/in/zakishaikh10/ " target="_blank" underline="hover" style={{color:"#fff"}}><LinkedInIcon/></Link>,
           label: "LinkedIn",
           desc:"https://www.linkedin.com/in/zakishaikh10/"
        },
        {
            Icon: <Link href="https://drive.google.com/file/d/1TMqneB2PF-9119JdTzee6MI8NtNIwJvk/view?usp=sharing" target="_blank" underline="hover" style={{color:"#fff"}}><ReorderRoundedIcon/></Link>,
            label: "Resume",
            desc:"https://drive.google.com/file/d/1TMqneB2PF-9119JdTzee6MI8NtNIwJvk/view?usp=sharing"
        },
   ]
    return (
        <Box className={classes.section} id="Contact">
            <ScrollAnimation animateIn='fadeIn'>
                <Container maxWidth='xl'>
                <Grid container spacing={2}>
                <Grid item sm={5}>
                    <Box  component={Hidden} xsDown>
                    <img src={image} alt="AboutImage" className={classes.aboutImg1 } />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <CommonHeaderSection label="CONTACT ME" headingBig="Liked my work? Let us connect" headingSmall="I love working with new people and build websites with exciting problem statements. Connect with me if you like my work!" withIcon={false} isAlign={false} arrowLogo={<ArrowDownwardRoundedIcon/>}/>
                    <br />
                    <Grid container>
                    {cardMediaArr.map((item, i) => {
                                return (
                                    <Grid item xs={12} sm={12} key={i}>
                                        <CardMedia Icon={item.Icon} label={item.label} desc={item.desc} isIcon={ true }/>
                                    </Grid>
                                    )
                            })}
                    </Grid>
                   
                </Grid>
          </Grid>
              </Container>
          </ScrollAnimation>
           
        </Box>
    )
}

