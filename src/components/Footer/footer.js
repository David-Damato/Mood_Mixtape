import React from 'react';
import './footer.css';
import bisou from "./bisou.png";


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <ul className="ul-footer">
                     <li>Retrouvez nos playlists sur Deezer :</li>
                    <li><a href="https://deezer.page.link/39CMRFSHWZcPkorC9Happy">😊</a></li>
                    <li><a href="https://deezer.page.link/awDCr7u12PyEk2ee9">😠</a></li> 
                    <li><a href="https://deezer.page.link/5W94rtMFBAo1rpaBA">😢</a></li> 
                    <li><a href="https://deezer.page.link/cB3gTjba8q2TL1Ak8">😍</a></li>
                    <li><a href="#">😎</a></li>
                    <li><a href="https://github.com/David-Damato/Mood_Mixtape" target="_blank">Projet Github</a></li>
                     <li><a href="#">Contact</a></li>
                     <li><a href="#"><img className="img-footer-bisou" src={bisou} alt="emoji bisou"></img></a></li>
                    <li>Made with <strong>Love</strong> by : Tom Aline, Pauline, David, Violaine</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer