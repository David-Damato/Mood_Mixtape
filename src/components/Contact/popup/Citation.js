import "./Citation.css";

export const Citation = ({phrase, auteur}) => {
    return (
            <div className="Citation">
                <blockquote className="blockquote">
                    <p className="citation">{phrase}</p>
                </blockquote>

                <p className="auteur"><strong>{auteur}</strong></p>
            </div>
    )
};