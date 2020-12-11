import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class IngredientList extends React.Component {
    constructor(props) {
        super(props);
        this.matches = [];
        console.log(this.props.input);
    }

    render() {
        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemText primary="Ingredient" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Ingredient 2" />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default IngredientList;