import React, {useContext} from "react";
import "../style/searchbar.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchBar = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchbar">
            <form className="form-inline">
                <input
                className="form-control mr-sm-2"
                type="search"
                placehold="Search"
                aria-label="Search"
                onChange={e => context.handleSearch(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}
export default SearchBar;
