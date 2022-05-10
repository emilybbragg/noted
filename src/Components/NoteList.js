import React, { useEffect, useState } from "react";
import Note from "./Note";

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    handleGetNotes()
  }, [])

  const handleGetNotes = () => {
    return fetch("http://localhost:3000/notes")
      .then((r) => r.json())
      .then((notes) => {
        setNotes(notes)
      })
  }
    
  function handleDeleteClick(note) {
    fetch(`http://localhost:3000/notes/${note.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteNote(note))
  }

  function handleSubmit(e) {
    e.preventDefault();
    const notesData = {
      description: description,
      name: name,
    };
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notesData),
      })
        .then((r) => r.json())
        .then((newNotes) => {
          const allNotesWithNew = [...notes, newNotes]
          setNotes(allNotesWithNew)
          setName("");
          setDescription("");
        })
  }

  function handleDeleteNote(deletedNote) {
    const updatedNotes = notes.filter((note) => note.id !== deletedNote.id)
    setNotes(updatedNotes)
  }
  
  const allNotes = notes.map((note) => {
    return <Note key={note.id} note={note} handleDeleteClick={handleDeleteClick}/>
  });

  return (
    <main>
      <div className="notesTitle">Current Notes</div>
      <ul className="notesList">
        {allNotes}
      </ul>
      <div className="noteSubmission">
        <div className="noteFormTitle">Add A New Note:</div>
        <form className="noteForm" onSubmit={handleSubmit}>
          <div className="noteNameInput">
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="noteDescription">
            <label htmlFor="description-input">Description:</label>
            <textarea id="description-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <input type="submit" className="noteSubmit"/>
        </form>
      </div>
    </main>
  );
}

export default NoteList;