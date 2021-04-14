import React from 'react'
import "./footer.css"
import "./bisou.png"


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <ul className="ul-footer">
                <li><a href="https://www.deezer.com/fr/" target="_blank">Retrouvez nos playlists sur Deezer</a></li>
                <li><a href="https://github.com/David-Damato/Mood_Mixtape" target="_blank">projet Github</a></li>
                <li><a href="#">Contact</a></li>
                <li><img src="components/Footer/bisou.png" alt="emoji bisou"></img></li>
                <li>Made with love by : Tom Aline, Pauline, David, Violaine</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer