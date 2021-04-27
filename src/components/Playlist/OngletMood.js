import "./OngletMood.css";
import React from "react";

export const OngletMood = ({type, playlistSelectionnee, setPlaylistSelectionnee}) => {
    return (
        <div
            onClick={() => setPlaylistSelectionnee(type)}
            className={`moodDiv mood${type} ${type !== playlistSelectionnee ? "moodDivNonSelectionnee" : ""}`}>

            <img className="moodPicture" src={`/images/moods/${type}.png`} alt={`mood${type}`}/>
            <span className="material-icons expand">expand_more</span>
        </div>
    )
}