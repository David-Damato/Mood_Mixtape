import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import hamburger from './hamburger.png'

const Navbar = () => {
const [open, setOpen] = useState(false)

const handleButtonClick = () => {
if (!open) {
    setOpen(true)
} else {
    setOpen(false)
}
}
 


    return(
       <div className="menu-container">
           <div className="menu-button" onClick={handleButtonClick }>
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