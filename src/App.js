import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./Components/Noteslist";
import Search from "./Components/Search";


const App=()=>{
  const [search,setSearch]=useState("");
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

  const deletenote=(id)=>{
    const newNotes=notes.filter((note)=>note.id!==id)

    setNotes(newNotes);



  }


  return (
    <div className="container">
      <Search handleSearch={setSearch}></Search>
      <NotesList 
      notes={notes.filter((note)=> note.text.toLowerCase().includes(search))} 
      handleAddNote={addNote}
      handleDeleteNote={deletenote}
      ></NotesList>
      
    </div>
  )
}

export default App;