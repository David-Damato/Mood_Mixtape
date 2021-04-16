export const BoutonFermer = ({setPopUpAffichee}) => {
    return (
        <div className="conteneur-bouton-fermer conteneur-horizontal">
            <div className="bouton-fermer" onClick={() => setPopUpAffichee(false)}>
                <i className="fa fa-times"></i>
            </div>
        </div>
    )
    
}