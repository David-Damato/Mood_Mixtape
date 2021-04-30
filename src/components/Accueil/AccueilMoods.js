import React from "react";
import { Link } from "react-router-dom";
import Sparkle from "react-sparkle";

export default function MoodChoice() {    
    return (
        <div className="moodChoice">
            <h1>Comment vous sentez-vous aujourd'hui ?</h1>
            <div className="moodLinks">
                <Link to="#"><img className="moodPicture happy" src="/images/moods/Happy.png"
                    alt="happy playlist" /></Link>

                <Link to="/MoodAngry"><img className="moodPicture angry" src="/images/moods/Angry.png"
                    alt="angry playlist" /></Link>


                <Link to="/MoodSad"><img className="moodPicture sad" src="/images/moods/Sad.png"
                    alt="in love playlist" /></Link>


                <Link to="/MoodInLove"><img className="moodPicture inlove" src="/images/moods/InLove.png"
                    alt="in love playlist" /></Link>

            </div>
            <div className="buttonBonusContainer">
            <Link to="/MoodBonus">
                <button className="buttonBonusAccueil">Il y a une surprise par ici ! (っ▀¯▀)つ
                <Sparkle
                color={'#e9c46a'}
                // The number of sparkles to render. A large number could slow
                // down the page.
                count={7}
                
                // The minimum and maximum diameter of sparkles, in pixels.
                minSize={8}
                maxSize={15}
                
                // The number of pixels the sparkles should extend beyond the
                // bounds of the parent element.
                overflowPx={20}
                
                // How quickly sparkles disappear; in other words, how quickly
                // new sparkles are created. Should be between 0 and 1000,
                // with 0 never fading sparkles out and 1000 immediately
                // removing sparkles. Most meaningful speeds are between
                // 0 and 150.
                fadeOutSpeed={20}
                
                // Whether we should create an entirely new sparkle when one
                // fades out. If false, we'll just reset the opacity, keeping
                // all other attributes of the sparkle the same.
                newSparkleOnFadeOut={true}
                
                // Whether sparkles should have a "flickering" effect.
                flicker={false}
                
                // How quickly the "flickering" should happen.
                // One of: 'slowest', 'slower', 'slow', 'normal', 'fast', 'faster', 'fastest'
                flickerSpeed={'slower'}/>
                </button>
            </Link>
            </div>
        </div>
    )
};

