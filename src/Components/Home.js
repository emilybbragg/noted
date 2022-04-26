import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Home () {
    /*const current = new Date();
    console.log(current)
    return current.toLocaleTimeString('en-US')
    */
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
}

export default Home;