import React from "react";
import "./style.css";


export default function MoodEnTete ({type}) {
             return(    
             <div>  
                  <div>
                  <img className="moodPicture" src={`/images/moods/${type}.png`} alt={`mood ${type}`}/>
                    </div>
                    <div class="playlist-name">
                       {`Playlist ${type}`}
                    </div> 
            </div>
        )
}