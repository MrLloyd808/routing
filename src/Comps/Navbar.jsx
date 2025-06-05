import React from 'react'
import "./nav.module.css"
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
    <Link to='/'><h2>Website</h2></Link>
    
    <ul>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/resume'><li>Resume</li></NavLink>
    </ul>

    </nav>
  )
}
