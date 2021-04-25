import "./DetailPlaylist.css";
import {useEffect, useState} from "react";
import {Player} from "./Player";

export const DetailPlaylist = ({type, playlist}) => {
    const [chanson, setChanson] = useState(null);
    useEffect(() => {
        setChanson(playlist[0]);
    }, [playlist]);

    return (
        <div className={`conteneur-horizontal playlist playlist-${type.toLowerCase()}`}>
            <div className="conteneur-vertical playlist-player">
                <div className="titre-playlist">Playlist {type}</div>
                {chanson && <Player
                    track={chanson}
                    type={type}/>}
            </div>
            <table>
                <tbody className="tbodyPlaylist">
                <tr>
                    <th><h3>Titre</h3></th>
                    <th><h3>Artiste</h3></th>
                    <th><h3>Album</h3></th>
                    <th><h3>Détails</h3></th>
                </tr>

                {playlist.map((track, index) =>
                    <tr key={`track-${index}`} className="trPlaylist">
                        <td className={`tdPlaylist td${type}`}>
                            {track.title}
                        </td>
                        <td className={`tdPlaylist td${type}`}>
                            {track.artist.name}
                        </td>
                        <td className={`tdPlaylist td${type}`}>
                            {track.album.title}
                        </td>
                        <td className="">
                            <button className={`buttonDetail button${type}`} key={track}
                                    onClick={() => setChanson(track)}>Afficher
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}