import "./BoutonFermer.css";

export const BoutonFermer = ({setPopUpAffichee, selecteurCss}) => {
    return (
        <div className="conteneur-bouton-fermer conteneur-horizontal">
            <div className={`bouton-fermer ${selecteurCss}`} onClick={() => setPopUpAffichee(false)}>
                <i className="fa fa-times"></i>
            </div>
        </div>
    )
    
};