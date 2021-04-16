import {PopupContact} from "./popup/PopupContact";
import {useState} from "react";

export const PhotoContact = ({nom, phrase, linkedIn, github, mail, hauteur, selecteurCss, photo}) => {

    const [popUpAffichee, setPopUpAffichee] = useState(false);


    return (
        <>
            <div className={`conteneur-vertical photo ${selecteurCss}`} onClick={() => setPopUpAffichee(true)} style={{
                height: `${hauteur}px`,
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
                selecteurCss={selecteurCss}
            />}
        </>
    )
};

