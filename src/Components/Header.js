import React from "react";
const Header=({handleToggleDarkMode,pre})=>{
    
    
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=>handleToggleDarkMode(!pre)}  className="save">Toggle Mode</button>
        </div>
    )

}

export default Header;