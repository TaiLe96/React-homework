import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import Navbar from "./components/Navbar";
import DataBody from "./components/DataBody";

function App(){
    return(
        <div>
            <Header/>
            {/* <SearchBar/> */}
            <Navbar/>
            <DataBody/>
        </div>
    )
}

export default App;