import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <input type='search' placeholder='🔍   Search photos and illustrate' />
        <NavLink to="/getUnsplash" >Get Unsplash+</NavLink>
        <NavLink to="/login" >Log in</NavLink>
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
        <NavLink to="/StreetPhotography">StreetPhotography</NavLink>
      </div>
      <div className='slider'>
        <div className='sliderFirst'>
          <NavLink to="/">🏠</NavLink>
          <NavLink to="/">🖼</NavLink>
          <NavLink to="/Illustrations">L</NavLink>
        </div>
        <div className='sliderSecond'>
          <NavLink to="/">🔍</NavLink>
          <NavLink to="/Collections">📁</NavLink>
          <NavLink to="/Downloads">⬇️</NavLink>
        </div>
        <div className='sliderThird'>
          <NavLink to="/">🔖</NavLink>
        </div>
        <div className='sliderFourth'>
          <NavLink to="/Profile">👤</NavLink>
          <NavLink to="/Language">🌐</NavLink>
          <NavLink to="/Menu">☰</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar