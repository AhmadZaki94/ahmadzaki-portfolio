import React from 'react';
import Box from "@material-ui/core/Box";
import { useStyles } from "./HeaderStyles";
import { NavBar } from "./NavBar";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import { Decoration } from "../CommonComponents/Decoration";
import {MyDrawer} from "./MyDrawer";
import { useState } from 'react';
import Typed from 'react-typed';
export const HeaderComponents = () => {
    const [initial, setInitial] = useState(false);
    const handleDrawer = () => {
        setInitial(!initial);
    }

    const navlinks = [
        { label: "About", Id: "About" },
        {label:"Projects",Id:"Portfolio"},
        {label:"Contacts",Id:"Contact"},
    ]
    
    const classes = useStyles();
    return (
        <Box className={classes.HeaderWrapper} id='Header'>
            <NavBar navlinks={ navlinks } handleDrawer={ handleDrawer }/>
            <MyDrawer handleDrawer={ handleDrawer } initial={initial} navlinks={ navlinks }/>
            <Box className={classes.HeaderContainer}>
                <Typography variant="h3" component="h4" >
                     <span style={{ paddingRight: '5px' }}></span>
                    <Typed
                        strings={[
                            'Hello World,',
                            'I am a Full-Stack Web Developer,',
                        ]}
                        typeSpeed={30}
                        backSpeed={49}
                        loop
                    >

                    </Typed>
               </Typography>
                <Typography variant="h5" component="h4" >I can develop web application according to your need</Typography>
                <Decoration label="About me" arrowLogo={<ArrowDownwardRoundedIcon/>} withIcon={true} isAlign={false} />
                
            </Box>
        </Box>
    )
}

//className={classes.headerDesc}  className={classes.headerTitle}