import React, {useEffect, useState} from 'react';
import "./playlist.css"
import fetchJsonp from "fetch-jsonp";
import {OngletMood} from "./OngletMood";
import {DetailPlaylist} from "./DetailPlaylist";

export default function Playlist() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistAngry, setplaylistAngry] = useState([]);
    const [playlistSad, setplaylistSad] = useState([]);
    const [playlistHappy, setplaylistHappy] = useState([]);
    const [playlistInLove, setplaylistInLove] = useState([]);
    const [playlistBonus, setPlaylistBonus] = useState([]);

    const [playlistSelectionnee, setPlaylistSelectionnee] = useState("Happy");

    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951248402?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setplaylistHappy(result.tracks.data);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951314702?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setplaylistAngry(result.tracks.data);
                },
                // Remarque : il faut gérer les erreurs ici plutôt que dans
                // un bloc catch() afin que nous n’avalions pas les exceptions
                // dues à de véritables bugs dans les composants.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    //playlist Sad

    useEffect(() => {
        fetchJsonp(" https://api.deezer.com/playlist/8951438662?output=jsonp")
        .then((res) => res.json())
        .then((result) => {
            setIsLoaded(true);
            setplaylistSad(result.tracks.data);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])


    

    //playlist Bonus
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
            <main>
                <div className="humeur_play">

                    <OngletMood
                        type={"Happy"}
                        playlistSelectionnee={playlistSelectionnee}
                        setPlaylistSelectionnee={setPlaylistSelectionnee}
                    />
                    <OngletMood
                        type={"Angry"}
                        playlistSelectionnee={playlistSelectionnee}
                        setPlaylistSelectionnee={setPlaylistSelectionnee}
                    />

                    <OngletMood
                        type={"Sad"}
                        playlistSelectionnee={playlistSelectionnee}
                        setPlaylistSelectionnee={setPlaylistSelectionnee}
                    />

                    <OngletMood
                        type={"InLove"}
                        playlistSelectionnee={playlistSelectionnee}
                        setPlaylistSelectionnee={setPlaylistSelectionnee}
                    />

                    <OngletMood
                        type={"Bonus"}
                        playlistSelectionnee={playlistSelectionnee}
                        setPlaylistSelectionnee={setPlaylistSelectionnee}
                    />

                </div>

                {playlistSelectionnee==="Happy" && <DetailPlaylist
                type={"Happy"}
                playlist={playlistHappy}/>}

                {playlistSelectionnee==="Angry" && <DetailPlaylist
                    type={"Angry"}
                    playlist={playlistAngry}/>}

                {playlistSelectionnee==="Sad" && <DetailPlaylist
                type={"Sad"}
                playlist={playlistSad}/>}    

                {playlistSelectionnee==="Bonus" && <DetailPlaylist
                    type={"Bonus"}
                    playlist={playlistBonus}/>}

            </main>

        );
    }
}
