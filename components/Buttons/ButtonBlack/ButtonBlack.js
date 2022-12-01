import classes from './styles.module.scss';


function ButtonBlack ({text, onClick, type="submit"}) {
    return (
        <>
            <button className={classes.button_black} onClick={onClick} type={type}>{text}</button>
        </>
    );
  }
  export default ButtonBlack