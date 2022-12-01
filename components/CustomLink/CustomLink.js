import classes from './styles.module.scss'

function CustomLink({icon, text, href}) {
return (
    <a href={href} className={classes.link} target='_blank' rel="noreferrer">
        <span>
            {icon}
        </span>
        <span className={classes.link_text}>
            {text}
        </span>
    </a>
    );
}
export default CustomLink