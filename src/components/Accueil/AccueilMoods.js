import React from "react";
import happy from "./images/happy.png";
import angry from "./images/angry.png";
import sad from "./images/sad.png";
import inLove from "./images/in-love.png";

export default function MoodChoice(){
    return(
        <div className="moodChoice">
            <h1>Comment vous sentez-vous aujourd'hui ?</h1>
            <div className="moodLinks">
                <a href=""><img className = "moodPicture" src={happy} alt="happy playlist"/></a>
                <a href=""><img className = "moodPicture" src={angry} alt="angry playlist"/></a>
                <a href=""><img className = "moodPicture" src={sad} alt="sad playlist"/></a>
                <a href=""><img className = "moodPicture" src={inLove} alt="in love playlist"/></a>
            </div>
        </div>
    )
};
