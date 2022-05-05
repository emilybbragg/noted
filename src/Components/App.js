import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import NoteList from "./NoteList";
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
        <Route exact path="/reminderlist">
          <ReminderList />
        </Route>
        <Route exact path="/notelist">
          <NoteList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
