import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import hamburger from './hamburger.png'

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false)

    const menuOnClick = () => {
        menuOpen? setMenuOpen(false) : setMenuOpen(true);
    }



    return(
       <div className="menu-container">
           <div className="menu-button" onClick={menuOnClick}>
                <img src={hamburger} className="burger-img" alt="burger menu"/> 
            </div>

            <nav>
                <ul className={menuOpen? "ul-menu-active" : "ul-menu"}>
                    <li><Link to={'/'} className="nav-link">Accueil</Link></li>
                    <li><Link to={'/playlist'} className="nav-link">Playlist</Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    <li><button className="closedBu"></button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;