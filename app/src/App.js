import React, { Component } from 'react'
import NavBar from "./components/NavBar";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { hello: "..." }
    }

    componentDidMount() {
        let hello = "empty";
        fetch('http://localhost:8080/hello')
            .then(response => response.json())
            .then(data => {
                this.setState({ hello: data })
            })
    }
       
    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }
}
export default App;