import React from "react";

function Note( {note, handleDeleteClick} ) {
    return (
        <li className="card">
          <div className="details">
            <strong>{note.name}</strong>
            <span> · {note.desciption}</span>
            <button className="emoji-button delete" onClick={() => handleDeleteClick(note)}>🗑</button>
          </div>
        </li>
      );
    }

export default Note;