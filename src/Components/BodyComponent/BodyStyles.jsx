import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";
export const useStyles = makeStyles((theme) => ({
    section: {
        background: Theme.colors.base1,
        padding:theme.spacing(10,0,8,0),
    },
    portFolioSection: {
        background: Theme.colors.primary1,
        padding:theme.spacing(10,0,8,0),
    },
    DividerLine: {
        background: Theme.colors.primary,
        width: "65px",
        height: "4px",
       // margin: theme.spacing(2, 0),
    },
    aboutImg:{
        width: "70%",
        height: "contained",
    },
    aboutImg1: {
        width: "100%",
        height:"auto",
    },
    CommonHeaderSectionCont: {
        padding: "8px",
        color: Theme.colors.base2,
    },
    headingBig:{
        margin: "16px 0px",
    },
    headingSmall: {
        fontWeight: "bolder",
        //fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    },

    //Card Media 
    cardMediaCont: {
         color:Theme.colors.base2,
     },
    avatarCont: {
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        alignItems: "center",
       
    },
    avatar: {
        backgroundColor: "#0097a7",
        color: Theme.colors.base2,
        width: "75px",
        height: "75px",
        [theme.breakpoints.down('xs')]: {
            width: "60px",
            height: "60px",
        }
    },
    avtImg:{
        width: "50%",
        height: "50%",
        backgroundColor: "#0097a7",
    },
    carditemtext: {
        marginTop: "25px",
        fontSize: "25px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "20px",
            marginTop:"15px",
        }

    },

    //Portfolio 
    portfolio1Cont: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",

    },

    //portfolio section ==>
    imageContainer: {
        position: "relative",
        '&:hover $imageOverly': {
            opacity:1,
        },
    },
    imageOverly: {
        position:"absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: Theme.colors.primary,
        color: Theme.colors.base2,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0,
        transition:'0.7s'
    },
    overlyTitle: {
        fontSize: "2rem",
        marginBottom: "16px",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.2rem",
        },

    },

    projectDescription: {
        width: "90%",
        margin:" 0 auto",
        color: "#fff",
        padding: "16px",
        marginTop:"15px",
        boxShadow: "5px 5px 10px #fff"
    },


    //Footer
    footerOutter: {
        position:"realtive", 
    },
    footerContainer: {
        background: Theme.colors.primary1,
        color: Theme.colors.base2,
         height:"50px",
       // margin:theme.spacing(2),
        //for up arrow ==>
    },
    iconButton: {
        position: "fixed",
        right: 20,
        bottom: 40,
        background: Theme.colors.primary,
        color: Theme.colors.base2,
    },
}))