import React, { useEffect, useState } from "react";
import Reminder from "./Reminder";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReminderList() {
    const [reminders, setReminders] = useState([]);
    const [reminderName, setReminderName] = useState("");
    const [reminderImportance, setReminderImportance] = useState("");
    const [reminderDate, reminderSetDate] = useState(new Date());

    useEffect(() => {
        handleGetReminders()
    }, [])

    const handleGetReminders = () => {
        return fetch("http://localhost:3000/reminders")
            .then((r) => r.json())
            .then((reminders) => {
                setReminders(reminders)
            })
    }

    const allReminders = reminders.map((reminder) => {
        return <Reminder key={reminder.id} reminder={reminder} handleReminderDeleteClick={handleReminderDeleteClick}/>
    });

    function handleDeleteReminder(deletedReminder) {
      const updatedReminders = reminders.filter((reminder) => reminder.id !== deletedReminder.id)
      setReminders(updatedReminders)
    }
    
    function handleReminderDeleteClick(reminders) {
      fetch(`http://localhost:3000/reminders/${reminders.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => handleDeleteReminder(reminders))
    }

    function handleReminderSubmit(e) {
      e.preventDefault();
      const reminderData = {
        importance: reminderImportance,
        name: reminderName,
        date: reminderDate,
      };
      fetch("http://localhost:3000/reminders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          body: JSON.stringify(reminderData),
      })
        .then((r) => r.json())
        .then((newReminders) => {
        const allRemindersWithNew = [...reminders, newReminders]
          setReminders(allRemindersWithNew)
        })
    }

  return (
    <main>
      <div className="reminderTitle">Current Reminders</div>
        <ul className="remindersList">
          {allReminders}
        </ul>
      <div className="reminderSubmission">
        <div className="reminderFormTitle">Add A New Reminder:</div>
          <form className="reminderForm" onSubmit={handleReminderSubmit}>
            <div className="nameInput">
              <label htmlFor="name-input">Reminder:</label>
              <input id="name-input" type="text" value={reminderName} onChange={(e) => setReminderName(e.target.value)}/>
            </div>
            <div className="dateInput">
             <label className="dateLabel" htmlFor="date-input">Date:</label>
             <DatePicker showTimeSelect dateFormat="MMMM d, yyyy h:mmaa" selected={reminderDate} onChange={reminderDate => reminderSetDate(reminderDate)} placeholderText="Select Date"/>
            </div>
            <select name="importance" id="importance" onChange={(e) => setReminderImportance(e.target.value)}>
             <option value="" disabled selected hidden>Importance</option>
             <option value="Low">Low</option>
             <option value="Medium">Medium</option>
             <option value="High">High</option>
            </select>
            <input type="submit" className="submitButton"/>
          </form>
      </div>
    </main>
  );
}

export default ReminderList;