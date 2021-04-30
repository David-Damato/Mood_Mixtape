import React, {useEffect, useState} from 'react';
import fetchJsonp from "fetch-jsonp";
import MoodEnTete from "./MoodEnTete";
import MoodPlayerSad from "./MoodPlayerSad";

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
        setPlaylistSad(result.tracks.data[index]);
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
                    type={"Sad"}/>


                <MoodPlayerSad
                    index={index}
                    setIndex={setIndex}
                    playlist={playlistSad} 
                    />
                    
                    </main>




        )
    }

}