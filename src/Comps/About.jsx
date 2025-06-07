import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import './About.module.css'

export default function About() {
  return (
    <>
    <section id='productnav'>
      <NavLink to='blue'><button id='navbtn'>blue</button></NavLink>
      <NavLink to={'red'}><button id='navbtn'>red</button></NavLink>
      <NavLink to={'orange'}><button id='navbtn'>orange</button></NavLink>
      <NavLink to={'green'}><button id='navbtn'>green</button></NavLink>
      <NavLink to={'purple'}><button id='navbtn'>purple</button></NavLink>
    </section>
    <Outlet />
    </>
  )
}
