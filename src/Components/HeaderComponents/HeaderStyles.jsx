import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";
import image from "../../Images/PortfoliobrandBanner.jpg";
export const useStyles = makeStyles((theme) => ({
    HeaderWrapper: {
        width: "100%",
        minHeight: "90vh",
        height:"auto",
        background: `linear-gradient(to bottom right,#04303140,#00606473),url(${image})`, //image with color
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    HeaderContainer: {
        width: "85%",
        minHeight: "90vh",
        height: "auto",
        color: Theme.colors.base2,
        padding:"20px",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "left",
        justifyContent: "center",
    },
    headerTitle: {
        fontSize: "3rem",
        [theme.breakpoints.down('xs')]: { //we need to give theme as argument in useStyle function.
            fontSize: "2rem",
            margin:theme.spacing(1,0),
          }
    },
    headerDesc: {
        fontSize: "2rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.25rem",
            margin:"16px 0px",
          }
    },
    decorator: {
        display: "flex",
        fontWeight: "bolder",
        fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        fontSize:"1rem",
        position: "relative",
       
        marginTop:"40px",
        '&:before': {
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: Theme.colors.primary,
            content:'""',
            
        }
    },
    decoratorText: {
        position: "absolute",
        left: "18.5px",
        top: "10px",
    },
    arrow: {
        position: "absolute",
        left: "120px",
        lineHeight: "40px",
        animationName: "upDownArrow",//upto you,
        animationDuration: "0.75s",
        animationIterationCount:"infinite",
    },

    //creating animation==>
    "@global": {
        "@keyframes upDownArrow": {
            "0%": {
                paddingTop: "0px",
                transform:"scale(0)"  
            },
            "100%": {
                paddingTop: "10px",
                transform:"scale(1)"
            }
        }
    },


    navbar: {
        backgroundColor: "#1e464a",
        color: Theme.colors.base2,
    },
    toolbar:{
        display: "flex",
        flexflow: "row wrap",
        justifyContent: "space-between",
        backgroundColor: "#1e464a",
    },
    navlinks:{
        color: Theme.colors.base2,
        backgroundColor: "#1e464a",
        fontWeight: "bolder",
        fontFamily: "Roboto,Helvetica,Arial,sans-serif",
        textDecorationThickness:"10px"
    },

    //Drewer ==> 

    drawer: {
        width: "250px",
        height: "100vh",   
    },
    drawerWrapper: {
        width: "250px",
        height: "100vh",
        background:Theme.colors.primary1,
    },
    listItems: {
        color: Theme.colors.base2,
        cusor:"poiner",
    }
}))

//#04303140,#00606473