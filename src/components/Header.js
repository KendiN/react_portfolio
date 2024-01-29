import React from 'react'

function Header() {
  return (
    <header className="header">
    <a href="#" className="logo"><span>Kendi Njeru's</span> Portfolio</a>

    <i className="bx bx-menu" id="menu-icon"></i>

    <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </nav>
</header>
  )
}

export default Header
