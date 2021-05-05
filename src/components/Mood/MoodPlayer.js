import React, {useState, useEffect} from "react";
import "./Mood.css";
import "./MoodPlayer.css";
import {Link} from "react-router-dom";

export default function MoodPlayer({track, index, setIndex, mood, numberOfTracks, autoPlay}) {
    const [audioPlayerAffiche, setAudioPlayerAffiche] = useState(false);
    const [isPlaying, setIsPlaying] = useState(autoPlay === true);
    const [isMuted, setIsMuted] = useState(false);
    const [previousEffect, setPreviousEffect] = useState(false);
    const [nextEffect, setNextEffect] = useState(false);
    const [currentTime, setCurrentTime] = useState('0:00');
    const [progressionInPercent, setProgressionInPercent] = useState(0);
    let audioPlayer;

    useEffect(() => {
        setIsPlaying(autoPlay === true);
        setCurrentTime('0:00');
        setProgressionInPercent(0);
        setAudioPlayerAffiche(false);
        setTimeout(() => setAudioPlayerAffiche(true), 500);
    }, [track?.preview]);

    useEffect(() => {
        if (audioPlayerAffiche === true) {
            audioPlayer = document.querySelector(`#audio-player-${mood}`);
            if (audioPlayer.muted === true) {
                setIsMuted(true);
            } else {
                setIsMuted(false);
            }
        }
    }, [audioPlayerAffiche, isPlaying, isMuted, index, previousEffect, nextEffect, currentTime, progressionInPercent, autoPlay]);

    const skipToPreviousTrack = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(numberOfTracks - 1);
        }
        setPreviousEffect(true);
        setTimeout(() => setPreviousEffect(false), 2000);
        setNextEffect(false);
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
        if (index < numberOfTracks - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        setPreviousEffect(false);
        setNextEffect(true);
        setTimeout(() => setNextEffect(false), 2000);
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

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${minutes}:${returnedSeconds}`;
    }

    return (
        <>
            <div
                className={`conteneur-vertical player-principal ${nextEffect === true ? "animate__animated animate__backInRight" : ""} ${previousEffect === true ? "animate__animated animate__backInLeft" : ""}`}
                style={{
                    backgroundImage: `linear-gradient(rgba(150, 150, 150, 0.6), rgba(150, 150, 150, 0.8)), url(${track?.album?.cover_medium})`,
                }}>
                <div className="blur">
                    <div className="conteneur-horizontal cover-random">
                        <div className={`player-principal-side back-button ${mood}`}>
                            <Link to="/">
                                <span className="material-icons-round">
                                    arrow_back
                                </span>
                            </Link>
                        </div>
                        <div className="album-picture-cover">
                            {track?.album && <img src={track.album.cover_medium} alt='Image_Album'/>}
                        </div>
                        <div className="conteneur-horizontal player-principal-side random">
                            <img src={`/images/moods/${mood}.png`} className="mood-in-player" alt={mood}/>
                            <i onClick={() => setIndex(Math.floor(Math.random() * (19 - 1)) + 1)}
                               className={`fa fa-random ${mood}`} aria-hidden="true"/>
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
                        <div className="player-principal-side player-control-time">{currentTime}</div>
                        <div className="conteneur-horizontal player-control-buttons">
                            <span
                                onClick={skipToPreviousTrack}
                                className={`material-icons-round previous-track ${mood}`}>
                                skip_previous
                            </span>
                            <span onClick={playPause} className={`material-icons-round play-button ${mood}`}>
                                {isPlaying === true ? "pause" : "play_arrow"}
                            </span>
                            <span
                                onClick={skipToNextTrack}
                                className={`material-icons-round next-track ${mood}`}>
                                skip_next
                            </span>
                        </div>
                        <div className="conteneur-vertical player-principal-side">
                            <div className="players-controls-volume-and-time">
                            <span onClick={muteUnmute} className={`material-icons-round volume ${mood}`}>
                                {isMuted === true ? "volume_off" : "volume_up"}
                            </span>
                            </div>

                        </div>
                    </div>
                    <div className={`progress-bar ${mood}`} style={{
                        width : progressionInPercent + '%'
                    }}></div>
                </div>
            </div>
            {audioPlayerAffiche && <audio
                id={`audio-player-${mood}`}
                autoPlay={autoPlay}
                onEnded={skipToNextTrack}
                onTimeUpdate={() => {
                    if (audioPlayer) {
                        setCurrentTime(calculateTime(audioPlayer.currentTime));
                        const trackProgression = (audioPlayer.currentTime*100)/30;
                        setProgressionInPercent(trackProgression>100 ? 100 : trackProgression)
                    }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={track?.preview}/>
            </audio>}
        </>
    )
}