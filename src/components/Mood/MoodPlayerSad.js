import React, { useState, useEffect } from "react";
import "./Mood.css";

export default function MoodPlayer ({playlist, index, setIndex}) {
    
    const [audioPlayerAffiche, setAudioPlayerAffiche] = useState(false);
    useEffect(() => {
        setAudioPlayerAffiche(false);
        setTimeout(() => setAudioPlayerAffiche(true), 500);
    }, [playlist.preview]);


    return (
        <div className="moodPlayerSad">
            <div className="moodCover">
            { playlist.album ? <img src={playlist.album.cover_medium} alt='Image_Album'/> : <p>Loading</p> }
            </div>
            <div className="moodAudioDescription">
                <div className="moodAudioContainer">
                {audioPlayerAffiche && <audio className="lecteur-playlist" controls>
                    <source src={playlist.preview}/>
                </audio>}
                </div>
                <div className="moodDescriptionContainer">
                <p><em>Titre :</em> {playlist.title}</p>
            { playlist.artist ? <p><em>Artiste :</em> {playlist.artist.name}</p> : <p>Loading</p> }
            { playlist.album ?  <p><em>Album :</em> {playlist.album.title}</p> : <p>Loading</p> }
                </div> 
            </div>
            <div className="moodButtons">
                <button type="button" className="buttonsSad" onClick={() => index > 0 && setIndex(index - 1)}>Précédent</button>
                <button type="button" className="buttonsSad">Random</button>
                <button type="button" className="buttonsSad" onClick={() => index < 14 && setIndex(index + 1)}>Suivant</button>
            </div>
        </div>
    )
}