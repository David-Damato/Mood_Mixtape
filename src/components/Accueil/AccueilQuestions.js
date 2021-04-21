import React from "react";

export default function Questions(){
    return(
        <div className="questionsEncadre">
            <div className="question">Qu'est-ce que <em className="moodMixtape">Mood Mixtape ?</em></div>
            <div className="reponse"><p>Créée en 2021, <em className="moodMixtape">Mood Mixtape</em> est une application qui vous permet de choisir une playlist en accord avec votre humeur.</p>
            <p>Vous vous êtes levé du bon pied ce matin et avez envie de sourire à tout le monde ? Le voisin a fait la fête toute la nuit, vous mettant d'humeur massacrante ? Vous êtes amoureux et cherchez une playlist pour votre date de ce soir ? Que vous vous sentiez heureux, en colère, triste ou amoureux, nous avons une playslist spécialement pour vous !</p></div>
            
            <div className="question">Puis-je retrouver toutes les playlists sur une seule page ?</div>
            <div className="reponse">Oui, bien sûr. Il suffit de vous rendre sur l'onglet « Playlists » du menu. Nous vous avons même préparé une playlist bonus ! </div>
            
        </div>
    )
};