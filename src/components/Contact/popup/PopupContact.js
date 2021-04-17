import "./PopupContact.css";
import {BoutonFermer} from "./BoutonFermer";
import {Photo} from "../Photo";
import {Citation} from "./Citation";

export const PopupContact = ({setPopUpAffichee, nom, phrase, auteur, linkedIn, github, mail, photo, selecteurCss}) => {
    return (
        <div className="conteneur-horizontal popup">

            <div className="conteneur-horizontal popup-contenu">

                <Photo
                    selecteurCss={selecteurCss}
                    src={photo}
                    type={"popup"}
                />

                <div className="conteneur-vertical popup-contact">

                    <BoutonFermer setPopUpAffichee={setPopUpAffichee}/>

                    <h1>{nom}</h1>

                    <Citation phrase={phrase} auteur={auteur}/>

                    <div className="popup-separateur"></div>

                    <div className="conteneur-horizontal popup-reseaux">
                        <a className={selecteurCss}
                           rel="noreferrer"
                           target="_blank"
                           href={github}>
                            <i className="fa fa-github"></i>
                        </a>

                        <a className={selecteurCss}
                           target="_blank"
                           rel="noreferrer"
                           href={linkedIn}>
                            <i className="fa fa-linkedin-square"></i>
                        </a>

                        <a className={selecteurCss}
                           href={`mailto:${mail}`}>
                            <i className="fa fa-at"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>

    )
};