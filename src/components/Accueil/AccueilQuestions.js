import React from "react";
import happy from "./images/happy.png";
import angry from "./images/angry.png";
import sad from "./images/sad.png";
import inLove from "./images/in-love.png";

export default function Questions(){
    return(
        <div className="questionsEncadre">
            <div className="question">Qu'est-ce que Mood Mixtape ?</div>
            <div className="reponse">Mood Mixtape est une application qui vous permet de choisir une playlist en accord avec votre humeur.</div>
            <div className="question">Vous vous êtes levé du bon pied ce matin et souriez à tout le monde ?</div>
            <div className="reponse"> La playlist <img className="emoticone" src={happy} alt="happy"/> est faite pour vous ! </div>
            <div className="question">Le voisin a fait la fête toute la nuit, vous mettant d'humeur massacrante ?</div>
            <div className="reponse">La playlist <img className="emoticone" src={angry} alt="angry"/> va vous défouler !</div>
            <div className="question">Vos enfants ont fait un gâteau au chocolat et ne vous ont pas laissé de part ?</div>
            <div className="reponse">La playlist <img className="emoticone" src={sad} alt="sad"/> vous mettra du baume au coeur</div>
            <div className="question">Vous êtes amoureux et cherchez une playlist pour votre date de ce soir ?</div>
            <div className="reponse">Ne cherchez plus, la playlist <img className="emoticone" src={inLove} alt="in love"/> sera parfaite !</div>
            <div className="question">Puis-je retrouver toutes les playlists sur une seule page ?</div>
            <div className="reponse">Oui, bien sûr. Il suffit de vous rendre sur l'onglet « Playlists » du menu en haut de la page. Nous vous avons même préparé une playlist bonus ! </div>
            
        </div>
    )
};