import React from "react";
import "../style/searchbar.css";

function SearchBar({handleSearch}){
    return (
        <div className="searchbar">
            <form className="form-inline">
                <input
                className="form-control mr-sm-2"
                type="search"
                placehold="Search"
                aria-label="Search"
                onChange={e => handleSearch(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
export default SearchBar;
