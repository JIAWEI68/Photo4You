import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className = "navigation">
        <a href = "/" className='brand-name'>Photo4You</a>
        <input className = "search-bar" id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value=""/>
        <div className='navigation-menu'>
            <ul>
                <li>
                    <a href = "/login">Login</a>
                </li>
                <li>
                    <a href = "/register">Sign Up</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
