import "./PopupContact.css";

export const PopupContact = ({setPopUpAffichee, nom, phrase, linkedIn, github, mail, photo}) => {
    return (
        <div className="conteneur-horizontal popup" onClick={() => setPopUpAffichee(false)}>

            <div className="conteneur-horizontal popup-contenu" style={{
                backgroundImage: `url(${photo})`
            }}>

                <div className="photo-popup"></div>


                <div className="conteneur-vertical popup-contact">

                    <h1>{nom}</h1>

                    <blockquote className="blockquote">
                        <p className="citation">{phrase}</p>
                    </blockquote>

                    <div className="popup-separateur"></div>

                    <div className="conteneur-horizontal popup-reseaux">

                        <a href={github}>
                        <i className="fa fa-github"></i>
                        </a>
                        <a href={linkedIn}>
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href={mail}>
                        <i className="fa fa-at"></i>
                        </a>

                    </div>

                </div>
                <span id="bouton-fermeture-formulaire" className="close">×</span>
            </div>

        </div>

    )
};