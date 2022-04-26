import React from "react";

function Reminder( {reminder, handleReminderDeleteClick} ) {


    return (
        <li className="card">
          <div className="details">
            <strong>{reminder.name}</strong>
            <span>Importance: {reminder.importance}</span>
            <span>Date: {reminder.date}</span>
            <button className="emoji-button delete" onClick={() => handleReminderDeleteClick(reminder)}>🗑</button>
          </div>
        </li>
      );
    }

export default Reminder;