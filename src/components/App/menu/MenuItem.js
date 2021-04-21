import {Link} from "react-router-dom";


export const MenuItem = ({lien, texte}) => {

    return (
        <li><Link to={lien}>{texte}</Link></li>
    )
};