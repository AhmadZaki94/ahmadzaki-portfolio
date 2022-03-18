import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container';


import Grid from "@material-ui/core/Grid"
import Hidden from '@material-ui/core/Hidden'
import image from "../../Images/zaki1.jpg"
import {useStyles} from "../BodyComponent/BodyStyles"
import { CommonHeaderSection } from '../CommonComponents/CommonHeaderSection'
import { CardMedia } from "../CommonComponents/CardMedia"
import ScrollAnimation from 'react-animate-on-scroll';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';

export const Aboutus = () => {
    const classes = useStyles();
 const cardMediaArr = [
     {
         Icon: "https://maxcdn.icons8.com/Color/PNG/512/Logos/html_5-512.png",
         label: "HTML",
         
     },
     {
        Icon: "https://maxcdn.icons8.com/Share/icon/Logos/css31600.png",
        label: "CSS",
        
     },
     {
        Icon: "https://www.freepnglogos.com/uploads/javascript-png/js-outline-javascript-logo-download-clip-art-with-transparent-25.png",
        label: "JS",
        
     },
     {
        Icon: "https://i.pinimg.com/originals/be/44/63/be446376fa788d1a97c7e639d20118a0.png",
        label: "React",
        
     },
     {
        Icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png",
        label: "Redux",
        
     },
     {
        Icon: "https://iconape.com/wp-content/files/cb/80901/png/material-ui.png",
        label: "Material-UI",
        
     },
     {
        Icon: "https://th.bing.com/th/id/R.36f9729fc600bcd8b11b9e53ee7dd75c?rik=Xg%2b47juHi8AHcQ&riu=http%3a%2f%2fsiliconangle.com%2ffiles%2f2015%2f01%2fMongoDB_Logo.png&ehk=8Q4nQDipF3ddt8H9kPGjS8foity8IoJZ4HBSagDtSCE%3d&risl=&pid=ImgRaw&r=0",
        label: "MongoDB",
        
     },
     {
        Icon: "https://dzone.com/storage/temp/8229324-expressjs-logo.png",
        label: "Express",
        
     },
     {
        Icon: "https://th.bing.com/th/id/R.2dcc553d3ed4458ff1008bd363a30497?rik=3tYD1dvyuId2XA&riu=http%3a%2f%2fvitalflux.com%2fwp-content%2fuploads%2f2014%2f04%2flinkedin-javascript.png&ehk=fDhM2Y6oCBYpVs4vkmrK7w%2bibTAVr9mksqiTMmhM3HE%3d&risl=&pid=ImgRaw&r=0",
        label: "ES6",
        
     },
     {
        Icon: "https://www.shareicon.net/data/512x512/2016/07/10/119473_development_512x512.png",
        label: "NodeJS",
        
     },
    
]
    return (
       <Box className={classes.section} id="About">
          <ScrollAnimation animateIn='fadeIn'>
             <Container maxWidth='xl'>
             <Grid container spacing={2}>
                <Grid item sm={5}>
                    <Box  component={Hidden} xsDown>
                    <img src={image} alt="AboutImage" className={classes.aboutImg } />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <CommonHeaderSection label="ABOUT ME" headingBig="Hello I'm Ahmad Zaki" headingSmall="An innovative and adaptive full-stack-web developer
                    with expertise in React, Node, JS. A team player
                    passionate about solving engineering Problems." withIcon={false} isAlign={false} arrowLogo={<ArrowDownwardRoundedIcon/>}/>
                    <br />
                    <Grid container>
                      
                            {cardMediaArr.map((item, i) => {
                                return (
                                    <Grid item xs={12} sm={6} key={i}>
                                        <CardMedia Icon={item.Icon} label={item.label} desc={item.desc} isIcon={ false }/>
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
