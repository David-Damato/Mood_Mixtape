import React from "react";
import "./Mood.css";

export default function MoodPlayer ({playlist}) {
    console.log(playlist.album)    
    return (
        <div className="moodPlayer">
            <div className="moodCover">
            { playlist.album ? <img src={playlist.album.cover_medium} alt='Image_Album'/> : <p>Loading</p> }
            </div>
            <div className="moodDescription">
                
                <audio controls className="moodAudio"><source src={playlist.preview}/></audio>
                
                <div>
                <p><em>Titre :</em> {playlist.title}</p>
            { playlist.artist ? <p><em>Artiste :</em> {playlist.artist.name}</p> : <p>Loading</p> }
            { playlist.album ?  <p><em>Album :</em> {playlist.album.title}</p> : <p>Loading</p> }
                </div>
                
                
            </div>
            <div className="moodButtons">
                <button className="buttons">Précédent</button>
                <button className="buttons">Random</button>
                <button className="buttons">Suivant</button>
            </div>
        </div>
    )
}