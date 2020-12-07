import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    bar: {
        minWidth: 650,
        backgroundColor: "#272932",
        color: "#ffffff"
    },
});

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <Typography variant="title">
                        Whats For Dinner?
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;