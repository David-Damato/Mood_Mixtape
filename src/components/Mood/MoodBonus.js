import React, { useEffect, useState } from 'react';
import fetchJsonp from "fetch-jsonp";
import MoodPlayer from "./MoodPlayer";


export default function MoodBonus() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistBonus, setPlaylistBonus] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8986040282?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                setIsLoaded(true);
                setPlaylistBonus(result.tracks.data);
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

                {playlistBonus.length > 0 && <MoodPlayer
                    index={index}
                    setIndex={setIndex}
                    track={playlistBonus[index]}
                    mood="Bonus"
                    numberOfTracks={playlistBonus.length}
                    autoPlay={true}
                />}

            </main>
        )
    }
}