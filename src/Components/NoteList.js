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
    console.log(notes)

    const allNotes = notes.map((note) => {
        return <Note key={note.id} note={note} handleDeleteClick={handleDeleteClick}/>
    });

      function handleDeleteNote(deletedNote) {
        const updatedNotes = notes.filter((note) => note.id !== deletedNote.id)
        setNotes(updatedNotes)
      }
    
      function handleDeleteClick(notes) {
        fetch(`http://localhost:3000/notes/${notes.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleteNote(notes))
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
            console.log(newNotes)
            const allNotesWithNew = [...notes, newNotes]
            setNotes(allNotesWithNew)
          })
        }

    return (
        <main>
            <ul className="notesClass">
            {allNotes}
             <form onSubmit={handleSubmit}>
                <label htmlFor="name-input">Name:</label>
                 <input id="name-input" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                 <label htmlFor="description-input">Description:</label>
                <input id="description-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="submit" />
            </form>
            </ul>
         </main>
          );
        }

export default NoteList;