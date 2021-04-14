import {PopupContact} from "./PopupContact";
import {useState} from "react";

export const PhotoContact = ({nom, phrase, linkedIn, github, mail, hauteur, couleur, photo}) => {

    const [popUpAffichee, setPopUpAffichee] = useState(false);


    return (
        <>
            <div className="conteneur-vertical photo" onClick={() => setPopUpAffichee(true)} style={{
                height: `${hauteur}px`,
                backgroundColor: couleur
            }}>
            </div>

            {popUpAffichee && <PopupContact
                setPopUpAffichee={setPopUpAffichee}
                phrase={phrase}
                nom={nom}
                linkedIn={linkedIn}
                github={github}
                mail={mail}
                photo={photo}
                couleur={couleur}
            />}
        </>
    )
};

