import React, { useEffect, useState } from "react";
import Reminder from "./Reminder";

function ReminderList() {
    const [reminders, setReminders] = useState([]);
    const [reminderName, setReminderName] = useState("");
    const [reminderImportance, setReminderImportance] = useState("");
    const [reminderDate, setReminderDate] = useState("");

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
    console.log(reminders)

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
            console.log(newReminders)
            const allRemindersWithNew = [...reminders, newReminders]
            setReminders(allRemindersWithNew)
          })
        }

    return (
        <main>
            <ul className="cards">
            {allReminders}
             <form onSubmit={handleReminderSubmit}>
                <label htmlFor="name-input">Name:</label>
                 <input id="name-input" type="text" value={reminderName} onChange={(e) => setReminderName(e.target.value)}/>
                 <label htmlFor="importance-input">Importance:</label>
                <input id="importance-input" type="text" value={reminderImportance} onChange={(e) => setReminderImportance(e.target.value)}/>
                <label htmlFor="date-input">Date:</label>
                <input id="date-input" type="text" value={reminderDate} onChange={(e) => setReminderDate(e.target.value)}/>
                <input type="submit" />
            </form>
            </ul>
         </main>
          );
        }

export default ReminderList;