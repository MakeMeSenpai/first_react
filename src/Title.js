// src/Title.js

import { NavLink } from 'react-router-dom';

import React from 'react';
import './Title.css';

function Title() {
    return (
      <div className="background">
        <header>
          <h1 className="Title">SFPOPOS</h1>
          <h3 className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</h3>
  
          <div className="nav-link">
            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                exact to="/">List</NavLink>

            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                to="/about">About</NavLink>
          </div>
  
        </header>
      </div>
    )
  }

export default Title