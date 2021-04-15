import "./PopupContact.css";

export const PopupContact = ({setPopUpAffichee, nom, phrase, linkedIn, github, mail, photo, selecteurCss}) => {
    return (
        <div className="conteneur-horizontal popup" onClick={() => setPopUpAffichee(false)}>

            <div className="conteneur-horizontal popup-contenu">

                <div className={`photo-popup ${selecteurCss}`} style={{
                    backgroundImage: `url(${photo})`
                }}></div>


                <div className="conteneur-vertical popup-contact">

                    <h1>{nom}</h1>

                    <blockquote className="blockquote">
                        <p className="citation">{phrase}</p>
                    </blockquote>

                    <div className="popup-separateur"></div>

                    <div className="conteneur-horizontal popup-reseaux">

                        <a className={selecteurCss}
                           target="_blank"
                           href={github}>
                            <i className="fa fa-github"></i>
                        </a>

                        <a className={selecteurCss}
                           target="_blank"
                           href={linkedIn}>
                            <i className="fa fa-linkedin-square"></i>
                        </a>

                        <a className={selecteurCss}
                           href={`mailto:${mail}`}>
                            <i className="fa fa-at"></i>
                        </a>

                    </div>

                </div>
                <span id="bouton-fermeture-formulaire" className="close">×</span>
            </div>

        </div>

    )
};