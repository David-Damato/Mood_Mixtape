import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import hamburger from './hamburger.png'

const Navbar = () => {

//https://www.youtube.com/watch?v=FATDmvwdNYM 13:20 + setState checker pour le hook open sidebar
    return(
       <div className="menu-container">
           <div className="menu-button" onClick={''}>
                <img src={hamburger} className="burger-img" alt="burger menu"/> 
            </div>

            <nav className="navbar">
                <ul className="ul-menu">
                    <li><Link to={'/'} className="nav-link">Accueil</Link></li>
                    <li><Link to={'/playlist'} className="nav-link">Playlist</Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                </ul>
        </nav>
        </div>
    )
}

export default Navbar;