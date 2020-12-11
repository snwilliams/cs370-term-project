import React, { Component } from 'react'
import NavBar from "./components/NavBar";
import IngredientForm from "./components/SearchBar";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const json = require('./recipes');

var recipes = [];
var ingredients = [];
var measurements = ["cups", "cup", "ounces", "ounce", "pinches", "pinch", "tablespoons", "tablespoon", "teaspoons", "teaspoon", "pounds", "pound"];
for(var i = 0; i < json.recipes.length; i++) {
    recipes.push(json.recipes[i])
}
for(var j = 0; j < recipes.length; j++) {
    for(var k = 0; k < recipes[j].ingredients.length; k++) {
        ingredients.push(recipes[j].ingredients[k])
    }
}
for(var l = 0; l < ingredients.length; l++) {
    if(ingredients[l].includes("ADVERTISEMENT")){
        ingredients[l] = ingredients[l].replace("ADVERTISEMENT", "");
    }
    /*var matches = ingredients[l].match(/\d+/g);
    if(matches != null) {
        for(var t = 0; t < matches.length; t++){
            ingredients[l] = ingredients[l].replace(matches[t], "");
        }

    }
    ingredients[l] = ingredients[l].replace("/", "");
    for(var i = 0; i < measurements.length; i++) {
        if(ingredients[l].includes(measurements[i])) {
            ingredients[l] = ingredients[l].replace(measurements[i], "");
        }
    }
    if(ingredients[l].includes("(")) {
        ingredients[l] = ingredients[l].replace("(", "");
    }
    if(ingredients[l].includes(".")) {
        ingredients[l] = ingredients[l].replace(".", "");
    }
    if(ingredients[l].includes(")")) {
        ingredients[l] = ingredients[l].replace(")", "");
    }*/
}

//console.log(ingredients);


function createData(name, link, description) {
    return { name, link, description};
}


class MyTable extends React.Component {
    constructor(props) {
        super(props);
        this.rows = [];
        for(var i = 0; i < recipes.length; i++) {
            var ingString = ""
            for(var j = 0; j < ingredients[i].length; j++) {
                ingString += ingredients[j] + " ";
            }
            this.rows.push(createData(recipes[i].title,ingString, recipes[i].instructions))
        }

    }

    /*for(var i = 0; i < this.props.Recipes.length; i++){
    this.rows.push(createData(this.props.Recipes[i], 'This is the Link', 'This is a cool dish'));
}*/

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Recipe</TableCell>
                            <TableCell align="center">Ingredients</TableCell>
                            <TableCell align="center">Instructions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.link}</TableCell>
                                <TableCell align="left">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}




class App extends Component {
    constructor(props){
        super(props);
    }



    render() {
        const myStyle = {
            alignItems: 'center',
            paddingTop: 40,
            paddingBottom: 50,
            display: "flex",
            flexDirection: 'column',
        }
        return (
            <div>
                <div>
                    <NavBar/>
                    <div style={myStyle}>
                        <IngredientForm/>
                    </div>
                    <MyTable/>
                </div>
            </div>
        )
    }
}
export default App