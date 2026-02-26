import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
            <input type='search' placeholder='Search photo and illustrate' />
            <NavLink to="/getUnsplash" >GetUnsplash</NavLink>
            <NavLink to="/login" >Login</NavLink>
            <button className='Submit'>Submit an image</button>
        </div>
    </div>
  )
}

export default Navbar