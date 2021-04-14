import React from "react";
import "AccueilMoods.css";

export default function MoodChoice(){
    return(
        <div className="moodChoice">
            <h1>Comment te sens-tu aujourd'hui ?</h1>
            <div className="moodLinks">
                <a href=""><img src="image/happy.png" alt="happy playlist"/></a>
                <a href=""><img src="image/angry.png" alt="angry playlist"/></a>
                <a href=""><img src="image/sad.png" alt="sad playlist"/></a>
                <a href=""><img src="image/in-love.png" alt="in love playlist"/></a>
            </div>
        </div>
    )
};
