

import React from 'react';

export default class PLaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            angry: []
        };
    }
    componentDidMount() {
        fetch("https://api.deezer.com/playlist/8951314702")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        angry: result.tracks.data
                    });
                },
                // Remarque : il est important de traiter les erreurs ici
                // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
                // des exceptions provenant de réels bugs du composant.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, angry } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <ul>
                    {angry.map(track => (
                        < li key={track.title} >
                            { track.title}
                            < img
                                src={track.album.cover}
                                alt="avatar" />
                        </li>
                    ))
                    }
                </ul >
            );
        }
    }
}
