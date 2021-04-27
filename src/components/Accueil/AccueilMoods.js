import React from "react";


export default function MoodChoice(){
    return(
        <div className="moodChoice">
            <h1>Comment vous sentez-vous aujourd'hui ?</h1>
            <div className="moodLinks">
                <a href=""><img className = "moodPicture happy" src="/images/moods/Happy.png" alt="happy playlist"/></a>
                <a href=""><img className = "moodPicture angry" src="/images/moods/Angry.png" alt="angry playlist"/></a>
                <a href=""><img className = "moodPicture sad" src="/images/moods/Sad.png" alt="sad playlist"/></a>
                <a href="../Mood/MoodInLove.js"><img className = "moodPicture inlove" src="/images/moods/InLove.png" alt="in love playlist"/></a>
            </div>
        </div>
    )
};
