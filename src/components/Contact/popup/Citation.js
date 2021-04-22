import "./Citation.css";

export const Citation = ({phrase, auteur,selecteurCss}) => {
    return (
            <div className="Citation">
                <blockquote className="blockquote">
                    <p className="citation">{phrase}</p>
                </blockquote>

                <p className={`auteur ${selecteurCss}`}><strong>{auteur}</strong></p>
            </div>
    )
};