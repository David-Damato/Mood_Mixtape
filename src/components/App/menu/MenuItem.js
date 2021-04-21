import {Link} from "react-router-dom";


export const MenuItem = ({lien, texte, fermerMenu}) => {

    return (
        <li onClick={fermerMenu}><Link to={lien}>{texte}</Link></li>
    )
};