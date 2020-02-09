import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import Navbar from "./components/Navbar";
import DataBody from "./components/DataBody";
import Main from "./components/Main"

function App(){
    return(
        <div>
            <Header/>
            <SearchBar/>
            <Navbar/>
            <DataBody/>
            <Main/>
        </div>
    )
}

export default App;