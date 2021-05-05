import "./Menu.css";
import {MenuItem} from "./MenuItem";
import {useState} from "react";


export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () =>{
        setIsOpen(false);
    }
    return (
        <>
            <input
                onChange={()=> {
                    setIsOpen(isOpen=== true ? false : true);
                }}
                checked={isOpen}
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
                                link={'/'}
                                text={"Accueil"}
                                icon={"home"}
                                closeMenu={closeMenu}/>
                            <MenuItem
                                link={'/playlist'}
                                text={"Playlists"}
                                icon={"music"}
                                closeMenu={closeMenu}/>
                            <MenuItem
                                link={'/contact'}
                                text={"Contact"}
                                icon={"user-circle-o"}
                                closeMenu={closeMenu}/>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};