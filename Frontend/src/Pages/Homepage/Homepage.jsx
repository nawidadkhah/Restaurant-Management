import { React, useEffect, useState } from 'react'
import "../Homepage/Homepage.css"
export const Homepage = () => {
  useEffect(() => {

  }, [])
  return (
    <div className='home'>
      <div className="navbar">
        <ul className="navbar-ul">
          <i><a href="#">Home</a></i>
          <i><a href="#">About</a></i>
          <i><a href="#">Admin</a></i>
          <i><a href="#">Login</a></i>
        </ul>
      </div>
      <div className="home-content">
        homepage
      </div>
    </div>
  )
}
