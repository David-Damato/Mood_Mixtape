import React from 'react';
import './footer.css';
import bisou from "./bisou.png";


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <ul className="ul-footer">
                     <li className="desappear">Retrouvez nos playlists sur Deezer :</li>
                    <li className="desappear"><a href="https://deezer.page.link/39CMRFSHWZcPkorC9Happy" className="emo">😊</a></li>
                    <li className="desappear"><a href="https://deezer.page.link/awDCr7u12PyEk2ee9" className="emo">😠</a></li> 
                    <li className="desappear"><a href="https://deezer.page.link/5W94rtMFBAo1rpaBA" className="emo">😢</a></li> 
                    <li className="desappear"><a href="https://deezer.page.link/cB3gTjba8q2TL1Ak8" className="emo">😍</a></li>
                    <li className="desappear"><a href="#" className="emo" >😎</a></li>
                    <li className="desappear"> |</li>
                    <li className="desappear"><a href="https://github.com/David-Damato/Mood_Mixtape" target="_blank">Projet Github</a></li>
                    <li className="desappear">|</li>
                    <li className="desappear"><a href={'/contact'}>Contact</a></li>
                    <li className="desappear">|</li>
                    <li className="desappear"><a href="#"><img className="img-footer-bisou" src={bisou} alt="emoji bisou"></img></a></li>
                    <li>Made with <strong>Love</strong> by : Aline, Pauline, David, Violaine et Tom</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer