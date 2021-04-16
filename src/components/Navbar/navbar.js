import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false)

    const menuOnClick = () => {
        menuOpen? setMenuOpen(false) : setMenuOpen(true);
    }



    return(
       <div className="menu-container">
           <div>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo Mood and Mixtape"/>
            </div>
        </div>  
           <div className="menu-button" onClick={menuOnClick}>
           <div></div>
               
            </div>

            <nav>
                <ul className={menuOpen? "ul-menu-active" : "ul-menu"}>
                    <li><Link to={'/'} className="nav-link">Accueil</Link></li>
                    <li><Link to={'/playlist'} className="nav-link">Playlist</Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;