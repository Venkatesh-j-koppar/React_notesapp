import { useState } from "react";
const AddNote=({handleAddNote})=>{
const [noteText,setNoteText]=useState("");
const charlimit=200;

const handleChange=(event)=>{
    if(charlimit-event.target.value.length >=0)
    setNoteText(event.target.value);
    else{
        alert("Cannot type more")
    }
}
const handleSaveCLick=()=>{
    if(noteText.trim().length>0){

        handleAddNote(noteText);
        setNoteText("")
        
       
    }
    else{
        alert("Enter The Task")
    }

}

return(
    <div className="note new">
        <textarea rows="8" cols="10" placeholder="Type to add a note" onChange={handleChange} value={noteText}>

        </textarea>
        <div className="note-footer">
            <small>{charlimit-noteText.length}</small>
            <button className="save" onClick={handleSaveCLick}>Save</button>

        </div>
    </div>
)
}

export default AddNote;