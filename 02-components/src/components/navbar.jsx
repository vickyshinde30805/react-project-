import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="navbar-cta">Get Started</button>
    </nav>
  )
}

export default Navbar