import React, { useState, useEffect } from 'react';
import fetchJsonp from "fetch-jsonp";

export default function MoodHappy () {

    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        fetchJsonp("https://api.deezer.com/playlist/8951314702?output=jsonp")
            .then((res) => res.json())
            .then((result) => {
                setPlaylist(result.tracks.data);
            },
            )
    }, [])
        return (
            <>
                <div class="container">
                    <div>
                        <img class="icon" src="https://cdn.discordapp.com/attachments/826792627445694490/829272046793916466/happy.png" alt="happy mood icon"/>
                    </div>
                    <div class="playlist-name">
                        Playlist Happy
                    </div>
                    <div class="player">
                         <div class="cover">
                             <img>{playlist[0].cover_big}</img>
                            <img></img>
                            <img></img>
                        </div>
                        <div class="infos">
                            <p>Titre : {playlist[0].title}</p>
                            <p>Artiste : {playlist[0].artist.name}</p>
                            <p>Année : {playlist[0].title}</p>
                            <p>Genre : {playlist[0].title}</p>
                        </div>
                        <div class="player">
                        </div>
                        <div class="buttons">
                            <button class="btn">Précédent</button>
                            <button class="btn">Random</button>
                            <button class="btn">Suivant</button>
                        </div>
                    </div>
                </div>
            </>
        )
}
