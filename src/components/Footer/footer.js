import React from 'react';
import './footer.css';
import bisou from "./bisou.png";


const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <ul className="ul-footer">
                     <li className="desappear">Retrouvez nos playlists sur Deezer :</li>
                    <li className="desappear"><a href="https://www.deezer.com/fr/playlist/8951248402" target="_blank" className="emo">😊</a></li>
                    <li className="desappear"><a href="https://www.deezer.com/fr/playlist/8951314702" target="_blank" className="emo">😠</a></li> 
                    <li className="desappear"><a href="https://www.deezer.com/fr/playlist/8951438662" target="_blank" className="emo">😢</a></li> 
                    <li className="desappear"><a href="https://www.deezer.com/fr/playlist/8951468122" target="_target" className="emo">😍</a></li>
                    <li className="desappear"><a href="https://www.deezer.com/fr/playlist/8986040282" target="_blank" className="emo" >😎</a></li>
                    <li className="desappear"> |</li>
                    <li className="desappear"><a href="https://github.com/David-Damato/Mood_Mixtape" target="_blank">Projet Github</a></li>
                    <li className="desappear">|</li>
                    <li className="desappear"><a href={'/contact'}>Contact</a></li>
                    <li className="desappear">|</li>
                    <li className="desappear"><img className="img-footer-bisou" src={bisou} alt="emoji bisou"></img></li>
                    <li>Made with <strong>Love</strong> by : Aline, Pauline, David, Violaine et Tom</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer