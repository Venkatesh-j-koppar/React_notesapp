import React from "react";
import { MdSearch } from "react-icons/md";

const Search=(props)=>{
    
return(
    <div className="search">
        <MdSearch className="searchicon" size="1.3em"></MdSearch>
        <input type="text" placeholder="type to search" onChange={(event)=>{
            var val=event.target.value;
            val=val.toLowerCase();
            props.handleSearch(val)}}></input>

    </div>
)
    
}



export default Search;