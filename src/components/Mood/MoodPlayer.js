import React, { useState, useEffect } from "react";
import "./Mood.css";
import "./MoodPlayer.css";

export default function MoodPlayer({ playlist: track, index, setIndex, mood }) {
    const [audioPlayerAffiche, setAudioPlayerAffiche] = useState(false);
    useEffect(() => {
        setAudioPlayerAffiche(false);
        setTimeout(() => setAudioPlayerAffiche(true), 500);
    }, [track.preview]);


    return (
        <>
            <div className= "conteneur-vertical player-principal">
                <div className= "conteneur-horizontal cover-random">
                    <div className="flex-grow"></div>
                    <div className="album-picture-cover">
                        {track.album && <img src={track.album.cover_medium} alt='Image_Album' />}
                    </div>
                    <div className="random"></div>
                </div>
                <div className="conteneur-vertical track-info">
                    <div className="track-title">
                        {track?.title}
                    </div>
                    <div className="track-artist">
                        {track?.artist?.name}
                    </div>
                    <div className="track-album">
                        {track?.album?.title}
                    </div>

                </div>
                <div className="conteneur-horizontal player-control">
                    <div className="player-control-time"></div>
                    <div className="player-control-buttons"></div>
                    <div className="flex-grow"></div>
                </div>



            </div>
            <div className={`moodPlayer moodPlayer${mood}`}>
                <div className="moodCover">
                    {track.album ? <img src={track.album.cover_medium} alt='Image_Album' /> : <p>Loading</p>}
                </div>
                <div className="moodAudioDescription">
                    <div className="moodAudioContainer">
                        {audioPlayerAffiche && <audio autoPlay className="lecteur-playlist" controls>
                            <source src={track.preview} />
                        </audio>}
                    </div>
                    <div className="moodDescriptionContainer">
                        <p><em>Titre :</em> {track.title}</p>
                        {track.artist ? <p><em>Artiste :</em> {track.artist.name}</p> : <p>Loading</p>}
                        {track.album ? <p><em>Album :</em> {track.album.title}</p> : <p>Loading</p>}
                    </div>
                </div>
                <div className="moodButtons">
                    <button type="button" className={`buttons buttons${mood}`} onClick={() => index > 0 && setIndex(index - 1)}>Précédent</button>
                    <button type="button" className={`buttons buttons${mood}`} onClick={() => setIndex(Math.floor(Math.random() * (19 - 1)) + 1)}>Random</button>
                    <button type="button" className={`buttons buttons${mood}`} onClick={() => index < 14 && setIndex(index + 1)}>Suivant</button>
                </div>
            </div>
        </>
    )
}