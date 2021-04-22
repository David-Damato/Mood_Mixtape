import logo from "./logo-transp-noir.png";
import React from "react";
import "./Logo.css";

export const Logo = () => {
    return(
        <div className="logo-container">
            <img className="logo" src={logo} alt="Mood Mixtape"/>
        </div>
    )
};