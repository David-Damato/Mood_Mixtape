import React, { useEffect, useState } from 'react';
import fetchJsonp from "fetch-jsonp";
import MoodHead from "./MoodHead";
import MoodPlayer from "./MoodPlayer";



export default function MoodInLove() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistInLove, setPlaylistInLove] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951468122?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                setIsLoaded(true);
                setPlaylistInLove(result.tracks.data);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <main className="container">

                <MoodHead
                    type={"InLove"}
                />

                {playlistInLove.length > 0 && <MoodPlayer
                    index={index}
                    setIndex={setIndex}
                    track={playlistInLove[index]}
                    mood="InLove"
                    numberOfTracks={playlistInLove.length}
                    autoPlay={true}
                />}

            </main>
        )
    }
}