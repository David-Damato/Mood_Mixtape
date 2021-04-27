import "./Menu.css";
import {MenuItem} from "./MenuItem";
import {useState} from "react";


export const Menu = () => {
    const [estOuvert, setEstOuvert] = useState(false)
    const fermerMenu = () =>{
        setEstOuvert(false);
    }
    return (
        <>
            <input
                onChange={()=> {
                    setEstOuvert(estOuvert=== true ? false : true);
                }}
                checked={estOuvert}
                type="checkbox"
                id="pure-toggle-left"
                className="pure-toggle"
                data-toggle="left"/>
            <label className="pure-toggle-label" htmlFor="pure-toggle-left" data-toggle-label="left">
                <span className="pure-toggle-icon"></span>
            </label>

            <nav className="pure-drawer" data-position="left">
                <div className="row-collapse">
                    <div className="large-12 column">
                        <ul className="nav-primary">
                            <MenuItem
                                lien={'/'}
                                texte={"Accueil"}
                                icone={"home"}
                                fermerMenu={fermerMenu}/>
                            <MenuItem
                                lien={'/playlist'}
                                texte={"Playlist"}
                                icone={"music"}
                                fermerMenu={fermerMenu}/>
                            <MenuItem
                                lien={'/contact'}
                                texte={"Contact"}
                                icone={"user-circle-o"}
                                fermerMenu={fermerMenu}/>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};