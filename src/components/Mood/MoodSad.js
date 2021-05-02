import React, { useEffect, useState } from 'react';
import fetchJsonp from "fetch-jsonp";
import MoodEnTete from "./MoodEnTete";
import MoodPlayer from "./MoodPlayer";

export default function MoodSad() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistSad, setPlaylistSad] = useState([]);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951438662?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                setIsLoaded(true);
                setPlaylistSad(result.tracks.data);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

            )

    }, [index])


    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <main className="container">

                <MoodEnTete
                    type={"Sad"} />


                {playlistSad.length > 0 && <MoodPlayer
                    index={index}
                    setIndex={setIndex}
                    track={playlistSad[index]}
                    mood="Sad"
                    numberOfTracks={playlistSad.length}
                />}

            </main>




        )
    }

}