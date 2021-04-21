import "./Menu.css";
import {MenuItem} from "./MenuItem";


export const Menu = () => {
    return (
        <>
            <input type="checkbox" id="pure-toggle-left" className="pure-toggle" data-toggle="left"/>
            <label className="pure-toggle-label" htmlFor="pure-toggle-left" data-toggle-label="left">
                <span className="pure-toggle-icon"></span>
            </label>

            <nav className="pure-drawer" data-position="left">
                <div className="row-collapse">
                    <div className="large-12 column">
                        <ul className="nav-primary">
                            <MenuItem lien={'/'} texte={"Accueil"} icone={"home"}/>
                            <MenuItem lien={'/playlist'} texte={"Playlist"} icone={"music"}/>
                            <MenuItem lien={'/contact'} texte={"Contact"} icone={"user-circle-o"}/>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};