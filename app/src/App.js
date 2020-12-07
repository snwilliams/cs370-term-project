import React, { Component } from 'react'
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import SimpleList from "./components/List";

class App extends Component {
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
                        <SearchBar/>
                        <SimpleList />
                    </div>
                    <Table/>
                </div>
            </div>
        )
    }
}
export default App