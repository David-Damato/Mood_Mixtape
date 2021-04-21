import {Link} from "react-router-dom";
import "./MenuItem.css";

export const MenuItem = ({lien, texte, icone}) => {

    return (
        <li><Link to={lien}>{texte}</Link></li>
        /*<li className="nav-item">
            <Link to={lien} className="nav-link">
                <div className="d-flex align-items-center">
                    <span className="nav-link-icon">
                        <i className={`fa fa-${icone}`}></i>
                    </span>
                    <span className="nav-link-text">{texte}</span>
                </div>
            </Link>
        </li>*/
    )
};