import "./PageContacts.css";
import pictoBisou from "../../picto/bisou.png";
import {Contact} from "./Contact";
import {equipe} from "./equipe";

export const PageContacts = () => {

    return (
        <div className="conteneur-vertical Contact">
            <div className="conteneur-horizontal photos-contact">
                {equipe.map((contact, index) => (
                    <Contact
                        nom={contact.nom}
                        phrase={contact.phrase}
                        auteur={contact.auteur}
                        github={contact.github}
                        linkedIn={contact.linkedIn}
                        mail={contact.mail}
                        hauteur={contact.hauteur}
                        selecteurCss={contact.selecteurCss}
                        photo={contact.photo}/>

                ))
                }
            </div>
            <div className="conteneur-horizontal titre-contact">
                <img className="picto-bisou" src={pictoBisou} alt="bisou"/>
                <div>contact</div>
                <img className="picto-bisou" src={pictoBisou} alt="bisou"/>
            </div>


        </div>
    )
};