export const Photo = ({selecteurCss, src, type}) => {
    return (
        <div className={`photo-${type} ${selecteurCss}`} style={{
            backgroundImage: `url(${src})`
        }}></div>
    )
};