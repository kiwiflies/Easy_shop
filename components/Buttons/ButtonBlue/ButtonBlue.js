import classes from './styles.module.scss';


function ButtonBlue ({text, onClick, type}) {
    return (
        <>
            <button className={classes.button_blue} type={type} onClick={onClick}>{text}</button>
        </>
    );
  }
  export default ButtonBlue