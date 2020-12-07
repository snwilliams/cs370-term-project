import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: '50ch',
        },
    },
}));

const SearchBar = () => {
    const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="ingredient" label="Enter Ingredient" variant={"outlined"}/>
        </form>
    )
}
export default SearchBar;