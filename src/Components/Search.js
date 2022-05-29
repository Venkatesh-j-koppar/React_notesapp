import React from "react";
import { MdSearch } from "react-icons/md";

const Search=(props)=>{
    
return(
    <div className="search">
        <MdSearch className="searchicon" size="1.3em"></MdSearch>
        <input type="text" placeholder="type to search" onChange={(event)=>{
            
            props.handleSearch(event.target.value)}}></input>

    </div>
)
    
}



export default Search;