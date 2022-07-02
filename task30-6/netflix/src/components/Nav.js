import React from 'react'
import {NavLink } from "react-router-dom";
import './style.css';

const Nav = ()=> {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <NavLink to="/Home" className="nav-link"  id='net' >Netflix</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <NavLink to="/Home"  className="nav-link">Home</NavLink>

        </li>
        <li class="nav-item">
        <NavLink to="/About"  className="nav-link">About</NavLink>
        </li>
        
       </ul> </div>
  </div>
</nav>
  )
}

export default Nav
