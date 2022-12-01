import classes from './styles.module.scss';


function ButtonWhite ({text, onClick, type="button"}) {
    return (
        <>
            <button className={classes.button_white} onClick={onClick} type={type}>{text}</button>
        </>
    );
  }
  export default ButtonWhite