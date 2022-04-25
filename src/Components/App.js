//import logo from './logo.svg';
//import './App.css';
import React from "react";
import NavBar from "./NavBar";
import NotesList from "./NotesList";
import ToDoList from "./ToDoList";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <NavBar />
      <NotesList />
      <ToDoList />
      <Home />
    </div>
  );
}



export default App;
