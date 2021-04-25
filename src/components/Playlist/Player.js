import "./Player.css";

export const Player = ({track, type}) => {
    return (
        <th id={`detail${type}`} className={`detail${type}`}>

            <img className="couverture-album" src={track.album.cover_medium} alt='Image_Album'/>
                <h3>Extrait:</h3>
                <audio controls name="media">
                    <source src={track.preview}/>
                </audio>
                <h3>Titre:</h3>
                {track.title}
                <h3>Artiste:</h3>
                {track.artist.name}
                <h3>Album:</h3>
                {track.album.title}
        </th>
)

}