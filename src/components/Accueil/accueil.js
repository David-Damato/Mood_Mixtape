import React, { Component } from 'react';
import MoodChoice from "./AccueilMoods";
import Questions from "./AccueilQuestions";
import "./AccueilContenu.css"

class Accueil extends Component {
    render() {
        return (
            <main className="welcomePage">
                <Questions />
                <MoodChoice />
            </main>
        );
    }
}

export default Accueil;

