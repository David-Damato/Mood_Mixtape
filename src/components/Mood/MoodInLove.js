import React, {useEffect, useState} from 'react';
import fetchJsonp from "fetch-jsonp";
import MoodEnTete from "./MoodEnTete";
import MoodPlayer from "./MoodPlayer";

export default function MoodInLove () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistInLove, setPlaylistInLove] = useState([]);
    
    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951468122?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    console.log("consolelog result",result.tracks.data[0].album.cover_medium)
                    setPlaylistInLove(result.tracks.data[0]);
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
    console.log(playlistInLove)
    return (
        <main className="container">
        <MoodEnTete
        type={"InLove"}
        />
     
        <MoodPlayer
        playlist={playlistInLove}/>
        </main>
    )
}}