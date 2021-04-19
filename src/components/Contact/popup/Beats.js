import "./Beats.css";

export const Beats = ({titre, selecteurCss}) =>{
    return (
        <div className="conteneur-horizontal beats-conteneur">
            <div className={`beats ${selecteurCss}`}>
                <a>
                    <div></div>
                    <div></div>
                </a>
            </div>
            <div className={`beats-title ${selecteurCss}`}>{titre}</div>
        </div>
    )
}