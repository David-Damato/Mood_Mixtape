import React, {useState, useEffect} from "react";
import "./Mood.css";
import "./MoodPlayer.css";

export default function MoodPlayer({playlist: track, index, setIndex, mood}) {
    const [audioPlayerAffiche, setAudioPlayerAffiche] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    let audioPlayer;


    useEffect(() => {
        setAudioPlayerAffiche(false);
        setTimeout(() => setAudioPlayerAffiche(true), 500);
    }, [track.preview]);

    useEffect(() => {
        if (audioPlayerAffiche === true) {
            audioPlayer = document.querySelector("#audio-player")
        }
    }, [audioPlayerAffiche, isPlaying, isMuted, index]);

    const skipToPreviousTrack = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(14);
        }
        setIsPlaying(true);
    }

    const playPause = () => {
        if (isPlaying === true) {
            audioPlayer?.pause();
        } else {
            audioPlayer?.play();
        }
        setIsPlaying(!isPlaying);
    }

    const skipToNextTrack = () => {
        if (index < 14) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        setIsPlaying(true);
    }

    const muteUnmute = () => {
        if (isMuted === true) {
            audioPlayer.muted = false;
        } else {
            audioPlayer.muted = true;
        }
        setIsMuted(!isMuted);

    }


    return (
        <>
            <div className="conteneur-vertical player-principal"
                 style={{
                     backgroundImage: `linear-gradient(rgba(150, 150, 150, 0.6), rgba(150, 150, 150, 0.8)), url(${track?.album?.cover_medium})`,
                 }}>
                <div className="blur">
                    <div className="conteneur-horizontal cover-random">
                        <div className="player-principal-side"></div>
                        <div className="album-picture-cover">
                            {track.album && <img src={track.album.cover_medium} alt='Image_Album'/>}
                        </div>
                        <div className="conteneur-horizontal player-principal-side random">
                            <img src={`/images/moods/${mood}.png`} className="mood-in-player" alt={mood}/>
                            <i onClick={() => setIndex(Math.floor(Math.random() * (19 - 1)) + 1)}
                               className="fa fa-random" aria-hidden="true"/>
                        </div>
                    </div>
                    <div className="conteneur-horizontal track-info">
                        <div className="conteneur-vertical track-info-container">
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
                    </div>
                    <div className="conteneur-horizontal player-control">
                        <div className="player-principal-side player-control-time"></div>
                        <div className="conteneur-horizontal player-control-buttons">
                            <span
                                onClick={skipToPreviousTrack}
                                className="material-icons-round previous-track">
                                skip_previous
                            </span>
                            <span onClick={playPause} className="material-icons-round play-button">
                                {isPlaying === true ? "pause" : "play_arrow"}
                            </span>
                            <span
                                onClick={skipToNextTrack}
                                className="material-icons-round next-track">
                                skip_next
                            </span>
                        </div>
                        <div className="conteneur-vertical player-principal-side">
                            <div className="players-controls-volume-and-time">
                            <span onClick={muteUnmute} className="material-icons-round volume">
                                {isMuted === true ? "volume_off" : "volume_up"}
                            </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {audioPlayerAffiche && <audio
                id="audio-player"
                autoPlay
                onEnded={skipToNextTrack}
            >
                <source src={track.preview}/>
            </audio>}
        </>
    )
}