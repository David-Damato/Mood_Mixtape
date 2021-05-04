import {Link} from "react-router-dom";


export const MenuItem = ({link, text, closeMenu}) => {

    return (
        <li onClick={closeMenu}><Link to={link}>{text}</Link></li>
    )
};