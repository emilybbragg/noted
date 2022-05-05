import React, { useEffect, useState } from "react";

function Reminder( {reminder, handleReminderDeleteClick} ) {
  const [dateToDisplay, setDateToDisplay] = useState("")

  useEffect(() => {
    const dateObj = new Date(reminder.date)
    setDateToDisplay(dateObj.toLocaleString('en-US'))
  }, [reminder])
    
    return (
      <div className="reminderItemContainer">
      <li className="reminderItems">
          <strong>{reminder.name}</strong>
          <br></br>
          <span>Importance: {reminder.importance}</span>
          <br></br>
          <span>Date: {dateToDisplay}</span>
          <br></br>
          <button className="deleteButton gg-trash"
            onClick={() => handleReminderDeleteClick(reminder)}>
          </button>
      </li>
      </div>
    );
}

export default Reminder;