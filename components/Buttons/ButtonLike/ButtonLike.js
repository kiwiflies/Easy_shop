import { HeartIcon } from '../../Icons';
import classes from './styles.module.scss';


function ButtonLike ({onClick}) {
    return (
        <>
            <button className={classes.button_like} onClick={onClick}>
                <HeartIcon/>
            </button>
        </>
    );
  }
  export default ButtonLike