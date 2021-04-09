export const PhotoContact = ({nom, phrase, linkedIn, github, mail, hauteur, couleur}) =>{

    return(
        <div className="conteneur-vertical photo" style={{
            height: `${hauteur}px`,
            backgroundColor: couleur
        }}></div>
    )
};