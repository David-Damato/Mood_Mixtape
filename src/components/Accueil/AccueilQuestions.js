import React, { useState } from "react";

export default function Questions(){
    const [reponseOneAppears, setReponseOneAppears] = useState(false);
    const [reponseTwoAppears, setReponseTwoAppears] = useState(false);
    return(
        <div className="questionsEncadre">
            <div onClick={() => setReponseOneAppears((prevState) => !prevState)}
            className="question"><span>Qu'est-ce que <em className="moodMixtape">Mood Mixtape</em> ?</span></div>
            <div className={reponseOneAppears ? "reponse-appears" : "reponse-hidden"}><p>Créée en 2021, <em className="moodMixtape">Mood Mixtape</em> est une application qui vous permet de choisir une playlist en accord avec votre humeur.</p>
            <p>Vous vous êtes levé du bon pied ce matin et avez envie de sourire à tout le monde ? Le voisin a fait la fête toute la nuit, vous mettant d'humeur massacrante ? Vous êtes amoureux et cherchez une playlist pour votre date de ce soir ? Que vous vous sentiez heureux, en colère, triste ou amoureux, nous avons une playslist spécialement pour vous !</p></div>
            
            <div onClick={() => setReponseTwoAppears((prevState) => !prevState)}
            className="question">Puis-je retrouver toutes les playlists sur une seule page ?</div>
            <div className={reponseTwoAppears ? "reponse-appears" : "reponse-hidden"}>Oui, bien sûr. Il suffit de vous rendre sur l'onglet « Playlists » du menu. Nous vous avons même préparé une playlist bonus ! </div>
            
        </div>
    )
};