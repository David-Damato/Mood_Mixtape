import "./DetailPlaylist.css";
import {useEffect} from "react";

export const DetailPlaylist = ({type, playlist}) => {
    const afficherDetailChanson = (track) => {
        document.getElementById("detail"+type).innerHTML = `
                                        <img style="border-radius: 10px" src='${track.album.cover_medium}' alt='Image_Album'>
                                        <h3>Extrait:</h3>
                                        <audio controls name="media"><source src="${track.preview}"></audio>
                                        <h3>Titre:</h3>
                                        ${track.title}
                                        <h3>Artiste:</h3>
                                        ${track.artist.name}
                                        <h3>Album:</h3>
                                        ${track.album.title}`
    }

    useEffect(() => {
        afficherDetailChanson(playlist[0]);
    }, [])

    return (
        <div className={`playlist playlist-${type.toLowerCase()}`}>
            <table>
                <thead className="theadPlaylist">
                <h2>Playlist {type}</h2>
                <div id={`detail${type}`} className={`detail${type}`}>
                </div>
                </thead>
                <tbody className="tbodyPlaylist">
                <tr>
                    <th><h3>Titre</h3></th>
                    <th><h3>Artiste</h3></th>
                    <th><h3>Album</h3></th>
                    <th><h3>Détails</h3></th>
                </tr>
                {playlist.map(track =>
                    <>
                        <tr className="trPlaylist">
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
                                        onClick={() => afficherDetailChanson(track)}>Afficher
                                </button>
                            </td>
                        </tr>
                        <tr className="espaceTr"></tr>
                    </>
                )}
                </tbody>
            </table>
        </div>
    )
}