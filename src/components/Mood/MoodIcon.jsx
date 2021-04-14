import React, { Component } from 'react';
import "./style.css";

class MoodIcon extends Component {
    render() {
        return (
            <>
                <div class="container">
                    <div>
                        <img class="icon" src="https://cdn.discordapp.com/attachments/826792627445694490/829272046793916466/happy.png" alt="happy mood icon"/>
                    </div>
                    <div class="playlist-name">
                        Playlist Happy
                    </div>
                    <div class="playlist">

                    </div>
                </div>
            </>
        );
    }
}

export default MoodIcon;