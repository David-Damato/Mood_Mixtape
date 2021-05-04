import React from "react";
import "./Mood.css";


export default function MoodHead ({type}) {
             return(    
             <div className="moodHead">  
                <h1 className="moodName">
                       {`Playlist ${type}`}
                </h1> 
            </div>
        )
}