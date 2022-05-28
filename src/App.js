import { useEffect, useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./Components/Noteslist";
import Search from "./Components/Search";
import Header from "./Components/Header";


const App=()=>{
  const [search,setSearch]=useState("");
  const [darkMode,setDarkMode]=useState(false);
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

  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('react-notes-app'));
    if(savedNotes){
     
      setNotes(savedNotes);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('react-notes-app',JSON.stringify(notes))
  },[notes])

  

  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
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
    <div className={(darkMode)?"dark-mood":"container"}>
    
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode} pre={darkMode}></Header>
      <Search handleSearch={setSearch}></Search>
      <NotesList 
      notes={notes.filter((note)=> note.text.toLowerCase().includes(search))} 
      handleAddNote={addNote}
      handleDeleteNote={deletenote}
      ></NotesList>
      
    </div>  
    
    
    </div>
    
  )
}

export default App;