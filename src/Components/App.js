//import logo from './logo.svg';
//import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import NotesList from "./NotesList";
import ReminderList from "./ReminderList";
import Home from "./Home";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reminderslist">
          <Reminders />
        </Route>
        <Route exact path="noteslist">
          <Notes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
