import React, { Component } from 'react';
import { useState, useEffect } from "react";
import Footer from '../Footer/footer'
import PlaylistUni from './PlaylistUni'
import "./playlist.css"
import IMG_happy from "../Accueil//images/happy.png";
import IMG_angry from "../Accueil//images/angry.png";
import IMG_sad from "../Accueil//images/sad.png";
import IMG_inLove from "../Accueil/images/in-love.png";
import IMG_bonus from "../Accueil/images/bonus.png";
import fleche from "./images/fleche.jpg";
import Display from "./animations/display"

export default function Playlist() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [playlistAngry, setplaylistAngry] = useState([]);
    const [playlistSad, setplaylistSad] = useState([]);
    const [playlistHappy, setplaylistHappy] = useState([]);
    const [playlistInLove, setplaylistInLove] = useState([]);
    const [playlistBonus, setPlaylistBonus] = useState([]);

    const [divHappyAppears, setDivHappyAppears] = useState(true);
    const [divAngryAppears, setDivAngryAppears] = useState(false);
    const [divBonusAppears, setDivBonusAppears] = useState(false);


    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/8951248402")
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

    //playlist Bonus
    useEffect(() => {
        fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/8986040282")
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
                    <div className="moodDiv moodHappy">
                        <img className="moodPicture" src={IMG_happy} alt="moodHappy" />
                        <div>
                            <img onClick={() => setDivHappyAppears((prevState) => !prevState)} className="flechePicture" src={fleche} alt="moodAngry" />
                        </div>
                    </div>

                    <div className="moodDiv moodAngry">
                        <img className="moodPicture" src={IMG_angry} alt="moodAngry" />
                        <div>
                            <img onClick={() => setDivAngryAppears((prevState) => !prevState)} className="flechePicture" src={fleche} alt="moodAngry" />
                        </div>
                    </div>

                    <div className="moodDiv moodSad">
                        <img className="moodPicture" src={IMG_sad} alt="moodSad" />
                        <div>
                            <img className="flechePicture" src={fleche} alt="moodAngry" />
                        </div>
                    </div>

                    <div className="moodDiv moodInLove">
                        <img className="moodPicture" src={IMG_inLove} alt="moodInLove" />
                        <div>
                            <img className="flechePicture" src={fleche} alt="moodAngry" />
                        </div>
                    </div>

                    <div className="moodDiv moodBonus">
                        <img className="moodPicture" src={IMG_bonus} alt="moodBonus" />
                        <div>
                            <img className="flechePicture" src={fleche} alt="moodBonus" />
                        </div>
                    </div>

                </div>


                <div className={divHappyAppears ? "playlistHappy" : "playlistHappy-hidden"}>
                    <table>
                        <thead className="theadPlaylist">
                            <h2>Playlist Happy</h2>
                            <div id="detailHappy" className="detailHappy">
                            </div>
                        </thead>
                        <tbody className="tbodyPlaylist">
                            <tr>
                                <th><h3>Titre</h3></th>
                                <th><h3>Artiste</h3></th>
                                <th><h3>Album</h3></th>
                                <th><h3>Détails</h3></th>
                            </tr>
                            {playlistHappy.map(track =>
                                <>
                                    <tr className="trPlaylist">
                                        <td className="tdPlaylist tdHappy">
                                            {track.title}
                                        </td>
                                        <td className="tdPlaylist tdHappy">
                                            {track.artist.name}
                                        </td>
                                        <td className="tdPlaylist tdHappy">
                                            {track.album.title}
                                        </td>
                                        <td className="">
                                            <button className="buttonDetail buttonHappy" key={track} onClick={() => document.getElementById("detailHappy").innerHTML = `
                                        <img className="" style="border-radius: 10px" src='${track.album.cover_medium}' alt='Image_Album'>
                                        <h3>Extrait:</h3>
                                        <audio controls name="media"><source src="${track.preview}"></audio>
                                        <h3>Titre:</h3>
                                        ${track.title}
                                        <h3>Artiste:</h3>
                                        ${track.artist.name}
                                        <h3>Album:</h3>
                                        ${track.album.title}
                                        `}>Afficher</button>
                                        </td>
                                    </tr>
                                    <tr className="espaceTr"></tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className={divAngryAppears ? "playlistAngry" : "playlistAngry-hidden"}>
                    <table>
                        <thead className="theadPlaylist">
                            <h2>Playlist Angry</h2>
                            <div id="detailAngry" className="detailAngry">
                            </div>
                        </thead>
                        <tbody className="tbodyPlaylist">
                            <tr>
                                <th><h3>Titre</h3></th>
                                <th><h3>Artiste</h3></th>
                                <th><h3>Album</h3></th>
                                <th><h3>Détails</h3></th>
                            </tr>
                            {playlistAngry.map(track =>
                                <>
                                    <tr className="trPlaylist">
                                        <td className="tdPlaylist tdAngry">
                                            {track.title}
                                        </td>
                                        <td className="tdPlaylist tdAngry">
                                            {track.artist.name}
                                        </td>
                                        <td className="tdPlaylist tdAngry">
                                            {track.album.title}
                                        </td>
                                        <td className="">
                                            <button className="buttonDetail buttonAngry" key={track} onClick={() => document.getElementById("detailAngry").innerHTML = `
                                        <img className="" style="border-radius: 10px" src='${track.album.cover_medium}' alt='Image_Album'>
                                        <h3>Extrait:</h3>
                                        <audio controls name="media"><source src="${track.preview}"></audio>
                                        <h3>Titre:</h3>
                                        ${track.title}
                                        <h3>Artiste:</h3>
                                        ${track.artist.name}
                                        <h3>Album:</h3>
                                        ${track.album.title}
                                        `}>Afficher</button>
                                        </td>
                                    </tr>
                                    <tr className="espaceTr"></tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className={divBonusAppears ? "playlistBonus" : "playlistBonus-hidden"}>
                    <table>
                        <thead className="theadPlaylist">
                        <h2>Playlist Bonus</h2>
                        <div id="detailBonus" className="detailBonus">
                        </div>
                        </thead>
                        <tbody className="tbodyPlaylist">
                        <tr>
                            <th><h3>Titre</h3></th>
                            <th><h3>Artiste</h3></th>
                            <th><h3>Album</h3></th>
                            <th><h3>Détails</h3></th>
                        </tr>
                        {playlistBonus.map(track =>
                            <>
                                <tr className="trPlaylist">
                                    <td className="tdPlaylist tdBonus">
                                        {track.title}
                                    </td>
                                    <td className="tdPlaylist tdBonus">
                                        {track.artist.name}
                                    </td>
                                    <td className="tdPlaylist tdBonus">
                                        {track.album.title}
                                    </td>
                                    <td className="">
                                        <button className="buttonDetail buttonBonus" key={track} onClick={() => document.getElementById("detailBonus").innerHTML = `
                                        <img className="" style="border-radius: 10px" src='${track.album.cover_medium}' alt='Image_Album'>
                                        <h3>Extrait:</h3>
                                        <audio controls name="media"><source src="${track.preview}"></audio>
                                        <h3>Titre:</h3>
                                        ${track.title}
                                        <h3>Artiste:</h3>
                                        ${track.artist.name}
                                        <h3>Album:</h3>
                                        ${track.album.title}
                                        `}>Afficher</button>
                                    </td>
                                </tr>
                                <tr className="espaceTr"></tr>
                            </>
                        )}
                        </tbody>
                    </table>
                </div>
            </main >

        );
    }
}
