import React, { Component } from 'react';
import MoodChoice from "./AccueilMoods";
import "./AccueilMoods.css"

class Accueil extends Component {
    render() {
        return (
            <main className="welcomePage">
                Accueil !
                <MoodChoice/>
            </main>
        );
    }
}

export default Accueil;

