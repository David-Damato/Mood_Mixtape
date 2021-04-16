import React, { Component } from 'react';
import { useState, useEffect } from "react";
import Footer from '../Footer/footer'
import PlaylistUni from './PlaylistUni'
import "./playlist.css"
import IMG_happy from "../Accueil//images/happy.png";
import IMG_angry from "../Accueil//images/angry.png";
import IMG_sad from "../Accueil//images/sad.png";
import IMG_inLove from "../Accueil/images/in-love.png";
import fleche from "./images/fleche.jpg";

export default function Playlist() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistAngry, setplaylistAngry] = useState([]);
    const [playlistSad, setplaylistSad] = useState([]);
    const [playlistHappy, setplaylistHappy] = useState([]);
    const [playlistInLove, setplaylistInLove] = useState([]);


    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/8951314702")
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

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <main>
                <div className="humeur_play">
                    <div className="moodDiv moodHappy">
                        <a href=""><img className="moodPicture" src={IMG_happy} alt="moodHappy" /></a>
                        <div>
                            <a href=""><img className="flechePicture" src={fleche} alt="moodAngry" /></a>
                        </div>
                    </div>

                    <div className="moodDiv moodAngry">
                        <a href=""><img className="moodPicture" src={IMG_angry} alt="moodAngry" /></a>
                        <div>
                            <a href=""><img className="flechePicture" src={fleche} alt="moodAngry" /></a>
                        </div>
                    </div>

                    <div className="moodDiv moodSad">
                        <a href=""><img className="moodPicture" src={IMG_sad} alt="moodSad" /></a>
                        <div>
                            <a href=""><img className="flechePicture" src={fleche} alt="moodAngry" /></a>
                        </div>
                    </div>

                    <div className="moodDiv moodInLove">
                        <a href=""><img className="moodPicture" src={IMG_inLove} alt="moodInLove" /></a>
                        <div>
                            <a href=""><img className="flechePicture" src={fleche} alt="moodAngry" /></a>
                        </div>
                    </div>

                </div>
                <div className="playlistAngry">
                    <table>
                        <thead>
                            <tr>
                                <h2>PlayList Angry</h2>
                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                <h3>Titre</h3>
                                {playlistAngry.map(track =>
                                    <div className="angryText">{track.title}</div>
                                )}
                            </td>
                            <td>
                                <h3>Artiste</h3>
                                {playlistAngry.map(track =>
                                    <div className="angryText">{track.artist.name}</div>
                                )}
                            </td>
                            <td>
                                <h3>Album</h3>
                                {playlistAngry.map(track =>
                                    <div className="angryText">{track.album.title}</div>
                                )}
                            </td>
                        </tbody>
                    </table>
                </div>
            </main >

        );
    }
}