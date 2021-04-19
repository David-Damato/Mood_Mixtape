import "./PopupContact.css";
import {BoutonFermer} from "./BoutonFermer";
import {Photo} from "../Photo";
import {Citation} from "./Citation";
import {IconeLien} from "./IconeLien";
import {Beats} from "./Beats";

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
                    <BoutonFermer setPopUpAffichee={setPopUpAffichee} selecteurCss={selecteurCss}/>

                    <Beats titre={nom} selecteurCss={selecteurCss}/>

                    <Citation phrase={phrase} auteur={auteur} selecteurCss={selecteurCss}/>

                    <div className="popup-separateur"></div>

                    <div className="conteneur-horizontal popup-reseaux">
                        <IconeLien selecteurCss={selecteurCss} href={github} icone="github" nouvelOnglet={true}/>
                        <IconeLien selecteurCss={selecteurCss} href={linkedIn} icone="linkedin-square" nouvelOnglet={true}/>
                        <IconeLien selecteurCss={selecteurCss} href={`mailto:${mail}`} icone="envelope" nouvelOnglet={false}/>
                    </div>
                </div>
            </div>
        </div>

    )
};