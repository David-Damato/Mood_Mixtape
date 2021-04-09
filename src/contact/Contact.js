import "./Contact.css";
import pictoBisou from "../picto/bisou.png";

export const Contact = () => {
    return (
        <div className="conteneur-vertical Contact">
            <div className="conteneur-horizontal photos-contact">
                <div className="conteneur-vertical photo-aline"></div>
                <div className="conteneur-vertical photo-violaine"></div>
                <div className="conteneur-vertical photo-pauline"></div>
                <div className="conteneur-vertical photo-david"></div>
                <div className="conteneur-vertical photo-tom"></div>
            </div>
            <div className="conteneur-horizontal titre-contact">
                <img className="picto-bisou" src={pictoBisou}/>
                <div>contact</div>
                <img className="picto-bisou" src={pictoBisou}/>
            </div>

        </div>
    )
};