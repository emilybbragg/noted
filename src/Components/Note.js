import React from "react";

function Note( {note, handleDeleteClick} ) {

  return (
    <div className="noteItemContainer">
    <li className="noteItems">
        <strong>{note.name}</strong>
        <br></br>
        <span>{note.description}</span>
        <button className="noteDelete" class="gg-trash" onClick={() => handleDeleteClick(note)}></button>
    </li>
    </div>
  );
}

export default Note;
