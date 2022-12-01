import { Zoom } from '../../Icons';
import classes from './styles.module.scss';


function ButtonZoom ({onClick}) {
    return (
        <button className={classes.button_zoom} onClick={onClick}>
            <Zoom/>
        </button>
    );
  }
  export default ButtonZoom