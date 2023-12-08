import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to="/">home</NavLink>
      <NavLink to="projects">projects</NavLink>
      <NavLink to="about">about</NavLink>
    </div>
  )
}

export default Navbar