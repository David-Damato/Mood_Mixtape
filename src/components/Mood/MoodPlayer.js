import React from "react";
import "./style.css";

export default function MoodPlayer ({track}) {
        return (
        <div class="player">
            <div class="cover">
            <img className="icon" src={track.album.cover_medium} alt='Image_Album'/> 
            </div>
            <div class="infos">
                <p>Titre : {track.title}</p>
                <p>Artiste : {track.artist.name}</p> 
            </div>
            <div class="buttons">
                <button class="btn">Précédent</button>
                <button class="btn">Random</button>
                <button class="btn">Suivant</button>
            </div>
        </div>
    )
}