import React, { useEffect, useState } from 'react';
import fetchJsonp from "fetch-jsonp";
import MoodHead from "./MoodHead";
import MoodPlayer from "./MoodPlayer";


export default function MoodInLove() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistAngry, setPlaylistAngry] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951314702?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                setIsLoaded(true);
                setPlaylistAngry(result.tracks.data);
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
                    type={"Angry"}
                />

                {playlistAngry.length > 0 && <MoodPlayer
                    index={index}
                    setIndex={setIndex}
                    track={playlistAngry[index]}
                    mood="Angry"
                    numberOfTracks={playlistAngry.length}
                    autoPlay={true}
                />}

            </main>
        )
    }
}