import React, { Component } from 'react';
import MoodIcon from "./MoodIcon.jsx"
class Mood extends Component {
    render() {
        return (
            <main className="moodPage">
                <MoodIcon></MoodIcon>
            </main>
        );
    }
}

export default Mood;