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

    const [playlistSelected, setPlaylistSelected] = useState("Happy");

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

    //playlist InLove

    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951468122?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setplaylistInLove(result.tracks.data);
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
                        playlistSelected={playlistSelected}
                        setPlaylistSelected={setPlaylistSelected}
                    />
                    <OngletMood
                        type={"Angry"}
                        playlistSelected={playlistSelected}
                        setPlaylistSelected={setPlaylistSelected}
                    />

                    <OngletMood
                        type={"Sad"}
                        playlistSelected={playlistSelected}
                        setPlaylistSelected={setPlaylistSelected}
                    />

                    <OngletMood
                        type={"InLove"}
                        playlistSelected={playlistSelected}
                        setPlaylistSelected={setPlaylistSelected}
                    />

                    <OngletMood
                        type={"Bonus"}
                        playlistSelected={playlistSelected}
                        setPlaylistSelected={setPlaylistSelected}
                    />

                </div>

                <DetailPlaylist
                    type={"Happy"}
                    className={playlistSelected === "Happy" ? "playlist-active" : "playlist-inactive"}
                    playlist={playlistHappy}/>

          
                <DetailPlaylist
                    type={"Angry"}
                    className={playlistSelected === "Angry" ? "playlist-active" : "playlist-inactive"}
                    playlist={playlistAngry}/>

                <DetailPlaylist
                    type={"Sad"}
                    className={playlistSelected === "Sad" ? "playlist-active" : "playlist-inactive"}
                    playlist={playlistSad}/>
          
                 <DetailPlaylist
                    type={"InLove"}
                    className={playlistSelected === "InLove" ? "playlist-active" : "playlist-inactive"}
                    playlist={playlistInLove}/>
 
                <DetailPlaylist
                    type={"Bonus"}
                    className={playlistSelected === "Bonus" ? "playlist-active" : "playlist-inactive"}
                    playlist={playlistBonus}/>

            </main>

        );
    }
}
