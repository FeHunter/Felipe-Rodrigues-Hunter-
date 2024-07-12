import style from './ProjectContent.module.css';

export function ProjectText ({title, text}){
    return (
        <div className={style.projectText}>
            <h2 className={style.label}>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export function ProjectImages ({label, children}){
    return (
        <div className={style.projectImages}>
            <h2 className={style.label}>{label}</h2>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
}

export function ProjectVideo ({label, children}){
    return (
        <div className={style.projectVideo}>
            <h2 className={style.label}>{label}</h2>
            <div className={style.content}>
                {children}
            </div>
        </div>
    );
}

export function ProjectLink ({label, link}){
    return <a href={link} className={style.projectLink} target='_blank'>{label}</a>;
}