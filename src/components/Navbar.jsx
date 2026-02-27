import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
            <input type='search' placeholder='Search photos and illustrate' />
            <NavLink to="/getUnsplash" >GetUnsplash+</NavLink>
            <NavLink to="/login" >Login</NavLink>
            <button className='Submit'>Submit an image</button>
        </div>
        <div className='section'>
              <NavLink to="/Featured">Featured</NavLink>
              <NavLink to="/Wallpapers">Wallpapers</NavLink>
              <NavLink to="/3DRenders">3D Renders</NavLink>
              <NavLink to="/Nature">Nature</NavLink>
              <NavLink to="/Texture">Texture</NavLink>
              <NavLink to="/Film">Film</NavLink>
              <NavLink to="/Architecture">Architecture</NavLink>
              <NavLink to="/StreetPhotography">StreePhotography</NavLink>
          </div>
    </div>
  )
}

export default Navbar