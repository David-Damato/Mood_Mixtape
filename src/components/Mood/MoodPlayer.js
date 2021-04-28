import React from "react";
import "./Mood.css";

export default function MoodPlayer ({track}) {
        return (
        <div className="moodPlayer">
            <div className="moodCover">
            <img src={track.album.cover_medium} alt='Image_Album'/>
            </div>
            <div className="moodDescription">
                <div>
                <p><em>Titre :</em> {track.title}</p>
                <p><em>Artiste :</em> {track.artist.name}</p>
                <p><em>Album :</em> {track.album.title}</p>
                </div>
                <audio controls className="moodAudio"><source src={track.preview}/></audio>
                
            </div>
            <div className="moodButtons">
                <button className="buttons">Précédent</button>
                <button className="buttons">Random</button>
                <button className="buttons">Suivant</button>
            </div>
        </div>
    )
}