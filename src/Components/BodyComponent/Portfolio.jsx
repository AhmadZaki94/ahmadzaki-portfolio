import { Box, Grid, Container, Typography, Button } from '@material-ui/core'
import Link from '@material-ui/core/Link';
import React from 'react'
import { useStyles } from "../BodyComponent/BodyStyles"
import { CommonHeaderSection } from "../CommonComponents/CommonHeaderSection"
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ScrollAnimation from 'react-animate-on-scroll';

// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import image1 from "../../Images/Dunzo.png";
import image2 from "../../Images/Swiggy_Home.png";
import image3 from "../../Images/Uboric.png";

export const Portfolio = () => {
    const classes = useStyles();
    const portfolioData = [
        {url:image1,title:"Dunzo",visitLink:"https://sid283.github.io/dunzo_clone/homepage/index.html",git:"https://github.com/AhmadZaki94/Dunzo_backend.git",ptitle:"Dunzo",desc:"A web application that delivers foods and groceries.",stack:"HTML | CSS | Java Script."},
        {url:image2,title:"Swiggy",visitLink:"https://swiggy-kappa.vercel.app/",git:"https://github.com/AhmadZaki94/Swiggy_frontend.git",ptitle:"Swiggy",desc:"A web application that delivers foods",stack:"HTML | CSS | Java Script | React | NodeJS | herokku."},
        {url:image3,title:"Uboric",visitLink:"https://uboricproject.vercel.app/index.html",git:"https://github.com/i-am-parihar/Project-.git",ptitle:"Uboric",desc:"Clone of website that delivers lifestyle products",stack:"HTML | CSS | Java Script."},
     
    ]
    return (
        // headerSection
        <Box className={classes.portFolioSection} id="Portfolio">
             <Grid container className={classes.portfolio1Cont}>
                <Grid item xs={12} sm={8}>
                    <CommonHeaderSection label="PROJECTS" headingBig="Let's See My Work" isAlign={true} arrowLogo={<ArrowDownwardRoundedIcon/>} withIcon={false} />
               </Grid>
            </Grid>

            {/* image Section */}
            <ScrollAnimation animateIn='fadeIn'>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    {portfolioData.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={12} lg={4}>
                            <Box className={classes.imageContainer}>
                                    <img src={item.url} alt={item.title} className={classes.aboutImg1}/>
                                    {/* for hover over image */}
                                    <Box className={classes.imageOverly}>
                                        <Typography className={classes.overlyTitle}>
                                            <Link href={item.git} target="_blank" underline="hover" style={{color:"#fff"}}>{item.title} </Link>
                                        </Typography>
                                        <Button variant="contained">   <Link href={item.visitLink} target="_blank" underline="hover" style={{color:"grey"}}>Visit</Link></Button>
                                    </Box>
                                   
                                </Box>
                                
                                <Container>
                                <Box className={classes.projectDescription}>
                                         {/*Description Section*/}
                                        <Typography variant="h5">- Title: {item.ptitle}</Typography>
                                        <Typography variant="h6" component="h5">-Description: {item.desc }</Typography>
                                        <Typography variant="h6">- Tech Stack: {item.stack}</Typography>
                                        <Typography variant="h6"><Link href={item.git} target="_blank" underline="hover" style={{ color: "#fff" }}>- GitHub</Link></Typography>
                                        <Typography variant="h6"><Link href={item.visitLink} target="_blank" underline="hover" style={{ color: "#fff" }}>- Visit Website</Link></Typography>  
                                  </Box>
                                </Container>
                               
                         </Grid>
                        )
                    })}
                 </Grid>
            </Container>
            </ScrollAnimation>
        </Box>
       
    )
}
