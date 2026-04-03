import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Featured from './pages/Featured'
import Wallpapers from './pages/Wallpapers'
import WallpaperDetail from './pages/WallpaperDetail'
import ThreeD from './pages/3D'

const App = () => {
  return (
    <div className="layout">

      <div className="sidebar"></div>

      <div className="main">
        <div className="topbar">
          <Navbar />
        </div>

        <div className="pageContent">
          <Routes>
            <Route path="/"                element={<Featured />} />
            <Route path="/Featured"        element={<Featured />} />
            <Route path="/Wallpapers"      element={<Wallpapers />} />
            <Route path="/wallpaper/:id"   element={<WallpaperDetail />} />
            <Route path="/3DRenders"       element={<ThreeD />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App