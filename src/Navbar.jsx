import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className = "navigation">
        <Link to = "/" className='brand-name'>Photo4You</Link>
        <input className = "search-bar" id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value=""/>
        <div className='navigation-menu'>
            <ul>
                <li>
                    <Link to = "/login">Login</Link>
                </li>
                <li>
                    <Link to = "/register">Sign Up</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

