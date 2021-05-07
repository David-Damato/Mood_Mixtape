import "./OngletMood.css";
import React from "react";

export const OngletMood = ({type, playlistSelected, setPlaylistSelected}) => {
    return (
        <div
            onClick={() => setPlaylistSelected(type)}
            className={`moodDiv mood${type} ${type !== playlistSelected ? "moodDivNonSelected" : ""}`}>

            <img className="moodPicture" src={`/images/moods/${type}.png`} alt={`mood${type}`}/>

        </div>
    )
}