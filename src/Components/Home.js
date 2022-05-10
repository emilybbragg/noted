import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function Home() {
  const [calReminders, setCalReminders] = useState([])
  const [selectedDateRem, setSelectedDateRem] = useState([])
  const [date, setDate] = useState(new Date())
	const [greet, setGreet] = useState('Evening')

  useEffect(() => {
  	findGreet();
    getCalReminders()
  }, [])

  useEffect(() => {
    if (date && calReminders.length > 0) {
    	const updatedReminders = calReminders.filter((reminder) => {
        const dateObj = new Date(reminder.date)
        const dateString = dateObj.toLocaleDateString('en-US')
        const selectedDate = date.toLocaleDateString('en-US')
        return dateString === selectedDate
      })
      setSelectedDateRem(updatedReminders)
    }
  }, [date, calReminders])

  const findGreet = () => {
    const hours = new Date().getHours();

    if (hours === 0 || hours < 12) { 
      setGreet('Morning')
    } else if (hours === 1 || hours < 17) { 
      setGreet('Afternoon')
    }
  }

  const changeDate = (e) => {
    setDate(e)
  }

  const getCalReminders = () => {
  	return fetch("http://localhost:3000/reminders")
      .then((r) => r.json())
      .then((calReminders) => {
        setCalReminders(calReminders)
      })
  }

  return (
    <>
      <div className="greeting">{`Good ${greet}! Welcome to Noted.`}</div>
      <div className="homeReminderContainer">
        <div className="homeRemTitle">Today's Reminders:</div>
        	<ul className="homeReminderList">{selectedDateRem.map((reminder) => {
        		return <li className="homeRemItems" key={reminder.id}>{reminder.name}</li>
        	})}</ul>
      </div>
      <div className="calendar">
      	<Calendar value={date} onChange={changeDate}/>
      	<p className="selectedDay"> Current selected date is <b>{moment(date).format('MMMM Do YYYY')}</b></p>
      </div>
    </>
  )
}

export default Home;