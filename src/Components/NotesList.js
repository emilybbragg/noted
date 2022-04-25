import React, { useEffect, useState } from "react";
import Notes from "./Notes";

function NotesList() {
    //fetch the data using useEffect hook
    const [notes, setNotes] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/notes")
            .then((r) => r.json())
            .then((notes) => {
            setNotes(notes)
             })
    }, [])
    console.log(notes)

    const allNotes = notes.map((note) => {
        return <Notes key={note.id} notes={notes} setNotes={setNotes}/>
      });

      function handleDeleteNote(deletedNote) {
        const updatedNotes = notes.filter((note) => note.id !== deletedNote.id)
        setNotes(updatedNotes)
      }
    
      function handleDeleteClick(listing) {
        fetch(`http://localhost:6001/listings/${listing.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleteNote(notes))
            // 1. find the listing in all listings (based on listing.id) - .filter
            // 2. remove it from all listings by setting state
      }

    return (
    <main>
         <ul className="notes">
            {allNotes}
         <form>
              <label htmlFor="name-input">Name:</label>
              <input id="name-input" type="text" value={name}/>
             <label htmlFor="description-input">Description:</label>
              <input id="description-input" type="text" value={description}/>
             <input type="submit" />
        </form>
      </ul>
    </main>

    )
}
export default NotesList;