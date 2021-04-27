import React, { Component } from 'react';
import MoodHappy from "./MoodHappy.jsx"
import MoodInLove from "./MoodInLove"


class Mood extends Component {
    render() {
        return (
            <main className="moodPage">
               <MoodInLove/> 
            </main>
        );
    }
}

export default Mood;