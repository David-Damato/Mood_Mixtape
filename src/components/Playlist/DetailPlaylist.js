import "./DetailPlaylist.css";
import React, {useEffect, useState} from "react";
import MoodPlayer from "../Mood/MoodPlayer";

export const DetailPlaylist = ({type, playlist, className}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
    }, [playlist]);

    return (
        <div className={`conteneur-horizontal ${className} playlist-detail playlist-${type.toLowerCase()}`}>
            <div className="conteneur-vertical playlist-player">
                <div className="titre-playlist">Playlist {type}</div>
                <img className="moodPicture" src={`/images/moods/${type}.png`} alt={`mood${type}`}/>
                {playlist.length > 0 && <MoodPlayer
                    index={index}
                    setIndex={setIndex}
                    track={playlist[index]}
                    mood={type}
                    numberOfTracks={playlist.length}
                />}
            </div>
            <div className="liste-chansons">
                <table>
                    <tbody className="tbodyPlaylist">
                    <tr>
                        <th><h3>Titre</h3></th>
                        <th className="th-artiste"><h3>Artiste</h3></th>
                        <th className="th-album"><h3>Album</h3></th>
                        <th className="th-detail"><h3>Détails</h3></th>
                    </tr>

                    {playlist.map((track, index) =>
                        <tr key={`track-${index}`} className="trPlaylist" onClick={() => setIndex(index)}>
                            <td className={`tdPlaylist td-titre td${type}`}>
                                {track.title}
                            </td>
                            <td className={`tdPlaylist td-artiste td${type}`}>
                                {track.artist.name}
                            </td>
                            <td className={`tdPlaylist td-album td${type}`}>
                                {track.album.title}
                            </td>
                            <td className="td-button">
                                <button className={`buttonDetail  button${type}`} key={track}
                                        onClick={() => setIndex(index)}>Afficher
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}