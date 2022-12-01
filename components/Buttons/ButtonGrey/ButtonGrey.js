import classes from './styles.module.scss';


function ButtonGrey ({text, onClick, type}) {
    return (
        <>
            <button className={classes.button_grey} type={type} onClick={onClick}>{text}</button>
        </>
    );
  }
  export default ButtonGrey