import classes from './styles.module.scss'

function Title ({text}) {
return (
    <h1 className={classes.header}>
        {text}
    </h1>
    );
}
export default Title