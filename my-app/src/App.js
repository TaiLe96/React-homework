import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import Navbar from "./components/Navbar";


function App(){
    return(
        <div>
            <Header/>
            {/* <SearchBar/> */}
            <Navbar/>
        </div>
    )
}

export default App;