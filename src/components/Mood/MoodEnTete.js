import React from "react";
import "./Mood.css";


export default function MoodEnTete ({type}) {
             return(    
             <div className="moodEnTete">  
                <h1 class="moodName">
                       {`Playlist ${type}`}
                </h1> 
            </div>
        )
}