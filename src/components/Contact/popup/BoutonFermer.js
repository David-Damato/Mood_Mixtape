import "./BoutonFermer.css";

export const BoutonFermer = ({setDoitFermerLaPopup, setPopUpAffichee, selecteurCss}) => {
    return (
        <div className="conteneur-bouton-fermer conteneur-horizontal">
            <div className={`bouton-fermer ${selecteurCss}`} onClick={() => {
                setDoitFermerLaPopup(true);
                setTimeout(() => {
                    setPopUpAffichee(false);
                }, 2000);
            }}>
                <i className="fa fa-times"></i>
            </div>
        </div>
    )
    
};