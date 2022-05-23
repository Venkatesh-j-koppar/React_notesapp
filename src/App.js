import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./Components/Noteslist";


const App=()=>{
  const [notes,setNotes]=useState([
    {
      id:nanoid(),
      text:"This is my first note",
      date:"10/10/12",
    },
    {
      id:nanoid(),
      text:"This is my Second note",
      date:"10/11/12",
    },
    {
      id:nanoid(),
      text:"This is my Third note",
      date:"10/12/12",
    },
    {
      id:nanoid(),
      text:"This is my fourth note",
      date:"10/01/12",
    },

  ]);

  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid,
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
  }


  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}></NotesList>
      
    </div>
  )
}

export default App;