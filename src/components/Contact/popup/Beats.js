import "./Beats.css";

export const Beats = ({titre}) =>{
    return (
        <div className="conteneur-horizontal beats-conteneur">
            <div className="beats">
                <a>
                    <div></div>
                    <div></div>
                </a>
            </div>
            <div className="beats-title">{titre}</div>
        </div>
    )
}