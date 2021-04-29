import "./Player.css";
import {useEffect, useState} from "react";

export const Player = ({track, type}) => {
    const [audioPlayerAffiche, setAudioPlayerAffiche] = useState(false);
    useEffect(() => {
        setAudioPlayerAffiche(false);
        setTimeout(() => setAudioPlayerAffiche(true), 500);
    }, [track]);
    return (
        <div id={`detail${type}`} className={`detail${type} detail-chanson-conteneur`}>
            <div className="couverture-et-player">
                <img className="couverture-album" src={track.album.cover_medium} alt='Image_Album'/>
                <h3>Extrait:</h3>
                {audioPlayerAffiche && <audio className="lecteur-playlist" controls>
                    <source src={track.preview}/>
                </audio>}
            </div>
            <div className="informations-titre-chanson">
                <h3>Titre:</h3>
                {track.title}
                <h3>Artiste:</h3>
                {track.artist.name}
                <h3>Album:</h3>
                {track.album.title}
            </div>
        </div>
    )

}