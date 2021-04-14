export const PopupContact = ({setPopUpAffichee, nom, phrase, linkedIn, github, mail}) => {
    return (
        <div className="conteneur-horizontal popup" onClick={() => setPopUpAffichee(false)}>
            <img className="photo"></img>
            <span id="bouton-fermeture-formulaire" className="close" >×</span>
            <div className="conteneur-vertical contact">
                <h1>{nom}</h1>
                <q>{phrase}</q>
                <i className="Github">{github}</i>
                <i className="LinkedIn">{linkedIn}</i>
                <i className="Mail">{mail}</i>

            </div>


        </div>

    )
};