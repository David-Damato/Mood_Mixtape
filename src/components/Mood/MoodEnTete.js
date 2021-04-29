import React from "react";
import "./Mood.css";


export default function MoodEnTete ({type}) {
             return(    
             <div className="moodEnTete">  
                <img className="moodImg" src={`/images/moods/${type}.png`} alt={`mood ${type}`}/>
                <h1 class="moodName">
                       {`Playlist ${type}`}
                </h1> 
            </div>
        )
}