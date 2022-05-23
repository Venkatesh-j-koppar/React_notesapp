import { useState } from "react";
const AddNote=({handleAddNote})=>{
const [noteText,setNoteText]=useState("");

const handleChange=(event)=>{

 setNoteText(event.target.value);

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
            <small>200</small>
            <button className="save" onClick={handleSaveCLick}>Save</button>

        </div>
    </div>
)
}

export default AddNote;