import React from "react";
import {Link} from "react-router-dom";
export default function MoodChoice(){
    return(
        <div className="moodChoice">
            <h1>Comment vous sentez-vous aujourd'hui ?</h1>
            <div className="moodLinks">
                <Link to="#"><img className = "moodPicture happy" src="/images/moods/Happy.png"
                alt="happy playlist"/></Link>

                <Link to="#"><img className = "moodPicture angry" src="/images/moods/Angry.png"
                alt="angry playlist"/></Link>


                <Link to="/MoodSad"><img className = "moodPicture sad" src="/images/moods/Sad.png"
                alt="in love playlist"/></Link>

                
                <Link to="/MoodInLove"><img className = "moodPicture inlove" src="/images/moods/InLove.png"
                alt="in love playlist"/></Link>

            </div>
        </div>
    )
}; 

