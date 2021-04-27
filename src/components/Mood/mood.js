import React, { Component } from 'react';
import MoodHappy from "./MoodHappy.jsx"
class Mood extends Component {
    render() {
        return (
            <main className="moodPage">
                <MoodHappy></MoodHappy>
            </main>
        );
    }
}

export default Mood;