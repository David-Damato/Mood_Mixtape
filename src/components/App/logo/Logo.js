import logo from "./logo-transp-noir.png";
import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

export const Logo = () => {
    return(
        <Link to="/">
            <div className="logo-container">
            <img className="logo" src={logo} alt="Mood Mixtape"/>
            </div>
        </Link>
    )
};