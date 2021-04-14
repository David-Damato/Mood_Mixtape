import "./Contact.css";
import pictoBisou from "../picto/bisou.png";
import {PhotoContact} from "./PhotoContact";
import {equipe} from "./equipe";
import {PopupContact} from "./PopupContact";

export const Contact = () => {

    return (
        <div className="conteneur-vertical Contact">
            <div className="conteneur-horizontal photos-contact">
                {equipe.map((contact, index) => (
                    <PhotoContact
                        nom={contact.nom}
                        phrase={contact.phrase}
                        github={contact.github}
                        linkedIn={contact.linkedIn}
                        mail={contact.mail}
                        hauteur={contact.hauteur}
                        couleur={contact.couleur}
                        photo={contact.photo}/>

                ))
                }
            </div>
            <div className="conteneur-horizontal titre-contact">
                <img className="picto-bisou" src={pictoBisou}/>
                <div>contact</div>
                <img className="picto-bisou" src={pictoBisou}/>
            </div>


        </div>
    )
};