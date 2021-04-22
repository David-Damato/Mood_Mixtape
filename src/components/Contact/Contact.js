import {PopupContact} from "./popup/PopupContact";
import {useState} from "react";

export const Contact = ({nom, phrase, auteur, linkedIn, github, mail, selecteurCss, photoPopup, photoColorisee}) => {

    const [popUpAffichee, setPopUpAffichee] = useState(false);


    return (
        <>
            <div className={`conteneur-vertical photo ${selecteurCss}`} onClick={() => setPopUpAffichee(true)}>
                <img src={photoColorisee} alt={nom}/>

            </div>

            {popUpAffichee && <PopupContact
                setPopUpAffichee={setPopUpAffichee}
                phrase={phrase}
                nom={nom}
                linkedIn={linkedIn}
                github={github}
                mail={mail}
                photo={photoPopup}
                selecteurCss={selecteurCss}
                auteur={auteur}
            />}
        </>
    )
};

