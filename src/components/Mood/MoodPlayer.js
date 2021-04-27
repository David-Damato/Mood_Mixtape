import React from "react";
import "./style.css";

export default function MoodPlayer ({track}) {
        return (
        <div>
            <div class="cover">
                <img>{track.title}</img> 
            </div>
            <div class="infos">
                <p>Titre : {track.title}</p>
             {/*   <p>Artiste : {track.artist.name}</p> */}
                <p>Année : {track.title}</p>
                <p>Genre : {track.title}</p>
            </div>
            <div class="player">
            </div>
            <div class="buttons">
                <button class="btn">Précédent</button>
                <button class="btn">Random</button>
                <button class="btn">Suivant</button>
            </div>
        </div>
    )
}