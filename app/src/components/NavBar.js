import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color={'#2D2D2A'}>
                        CS-370 Project
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;