import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to ="/">Home</NavLink>
    <NavLink to ="/reminderlist">Reminders</NavLink>
    <NavLink to ="/notelist">Notes</NavLink>
  </div>
  )}


export default NavBar;