import "./DetailPlaylist.css";
import {useEffect, useState} from "react";
import {Player} from "./Player";

export const DetailPlaylist = ({type, playlist, className}) => {
    const [song, setSong] = useState(null);
    useEffect(() => {
        setSong(playlist[0]);
    }, [playlist]);

    return (
        <div className={`conteneur-horizontal ${className} playlist-detail playlist-${type.toLowerCase()}`}>
            <div className="conteneur-vertical playlist-player">
                <div className="titre-playlist">Playlist {type}</div>
                <img className="moodPicture" src={`/images/moods/${type}.png`} alt={`mood${type}`}/>
                {song && <Player
                    track={song}
                    type={type}/>}
            </div>
            <div className="liste-songs">
                <table>
                    <tbody className="tbodyPlaylist">
                    <tr>
                        <th><h3>Titre</h3></th>
                        <th className="th-artist"><h3>Artiste</h3></th>
                        <th className="th-album"><h3>Album</h3></th>
                        <th className="th-detail"><h3>Détails</h3></th>
                    </tr>

                    {playlist.map((track, index) =>
                        <tr key={`track-${index}`} className="trPlaylist" onClick={() => setSong(track)}>
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
                                        onClick={() => setSong(track)}>Afficher
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