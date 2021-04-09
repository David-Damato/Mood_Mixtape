import "./Contact.css";
import pictoBisou from "../picto/bisou.png";
import {PhotoContact} from "./PhotoContact";

export const Contact = () => {
    const equipe = [
        {
            nom: "Aline DUBOIS",
            phrase: "",
            linkedIn: "https://www.linkedin.com/in/aline-dubois-95a0351aa/",
            github: "https://github.com/alinedubois",
            mail: "juillet.aline@gmail.com",
            hauteur: 258,
            couleur: 'orange'
        },
        {
            nom: "Pauline LABBE",
            phrase: "",
            linkedIn: "https://www.linkedin.com/in/pauline-labb%C3%A9-360436b7/",
            github: "https://github.com/Palabbe",
            mail: "pauline.labbe7@gmail.com",
            hauteur: 315,
            couleur: 'blue'
        },
        {
            nom: "Violaine ERNOTTE",
            phrase: "",
            linkedIn: "",
            github: "https://github.com/vio9",
            mail: "e.violaine@yahoo.fr",
            hauteur: 140,
            couleur: 'yellow'
        },
        {
            nom: "David D'AMATO",
            phrase: "",
            linkedIn: "",
            github: "https://github.com/David-Damato",
            mail: "david76230@gmail.com",
            hauteur: 530,
            couleur: 'red'
        },
        {
            nom: "Tom CARPENTIER",
            phrase: "",
            linkedIn: "",
            github: "",
            mail: "t.carpentier.19@gmail.com",
            hauteur: 415,
            couleur: 'green'
        }
    ]
    return (
        <div className="conteneur-vertical Contact">
            <div className="conteneur-horizontal photos-contact">
                {equipe.map((contact, index) => (
                    <PhotoContact
                        nom={contact.nom}
                    phrase={contact.phrase}
                    github={contact.github}
                    linkedIn={contact.github}
                    mail={contact.mail}
                    hauteur={contact.hauteur}
                    couleur={contact.couleur}/>
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