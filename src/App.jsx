import React from 'react'
import Navbar from './components/Navbar'
import Featured from './pages/Featured'

const App = () => {
  return (
    <div className="layout">

      {/* Sidebar rendered inside Navbar */}
      <div className="sidebar">
        {/* slider is rendered inside Navbar */}
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="topbar">
          <Navbar />
        </div>

        <div className="pageContent">
          <Featured />
        </div>
      </div>

    </div>
  )
}

export default App