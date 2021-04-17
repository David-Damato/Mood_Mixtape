export const IconeLien = ({selecteurCss, href, icone, nouvelOnglet}) => {
    return(
        <a className={selecteurCss}
           rel="noreferrer"
           target={nouvelOnglet===true ? "_blank" : "_self"}
           href={href}>
            <i className={`fa fa-${icone}`}></i>
        </a>
    )
};