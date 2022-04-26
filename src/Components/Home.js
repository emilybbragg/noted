import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


function Home () {
    //const current = new Date();
    //console.log(current);
    //return current.toLocaleTimeString('en-US');
    const [date, setDate] = useState(new Date())
    const changeDate = (e) => {
      setDate(e)
    }

    const [greet, setGreet] = useState('Evening')
    const findGreet = () => {
        const hours = new Date().getHours();
        if(hours === 0 || hours < 12) return setGreet('Morning');
        if(hours === 1 || hours < 17) return setGreet('Afternoon')
    }
    useEffect(() => {
        findGreet();
    }, [])

    return (
      <div>
      <div>{`Good ${greet}!`}</div>
        <Calendar 
        value={date}
        onChange={changeDate}
        />
      <p>Current selected date is <b>{moment(date).format('MMMM Do YYYY')}</b></p>
      </div>
    )
  }

export default Home;



 /*
    const getGreetingTime = (currentTime) => {
        if (!currentTime || !currentTime.isValid()) {
          return "Hello";
        }

        const splitAfternoon = 12; // 24hr time to split the afternoon
        const splitEvening = 17; // 24hr time to split the evening
        const currentHour = parseFloat(currentTime.format("HH"));
      
        if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
          // Between 12 PM and 5PM
          return "Good afternoon";
        } else if (currentHour >= splitEvening) {
          // Between 5PM and Midnight
          return "Good evening";
        }
        // Between dawn and noon
        return "Good morning";
      };
      
      return (
          <main>
            {getGreetingTime}
            <Calendar />
          </main>
      )
      */