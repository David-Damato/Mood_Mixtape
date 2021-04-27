import React, { Component } from 'react';
import MoodChoice from "./AccueilMoods";
import Questions from "./AccueilQuestions";
import "./AccueilContenu.css"

export default function Accueil () {
        return (
            <main className="welcomePage">
                <Questions />
                <MoodChoice />
            </main>
        );
    }



