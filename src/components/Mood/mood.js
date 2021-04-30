import React, { Component } from 'react';
import MoodHappy from "./MoodHappy.jsx"
import MoodInLove from "./MoodInLove"
import MoodSad from "./MoodSad"


class Mood extends Component {
    render() {
        return (
            <main className="moodPage">
               <MoodInLove/> 
               <MoodSad />
            </main>
        );
    }
}

export default Mood; 

