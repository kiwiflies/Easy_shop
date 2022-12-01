import classes from './styles.module.scss';
import ButtonBlack from '../Buttons/ButtonBlack/ButtonBlack';


function Subscribe ({white, black}) {
    return (
        <div>
            {black && <div className={classes.subscribe_part}>
                <div className={classes.subscribe_header}>
                    Subscribe for our Updates
                </div>
                <div className={classes.subscribe_privacy}>
                    <span>By entering your email address below, you can consent to receiving our 
                        newsletter with access to our latest collections.
                    </span>
                    <span>
                        <a href='#'>Privacy Policy</a>
                    </span>
                </div>
                <div className={classes.subscribe_form_part}>
                    <form>
                        <input type="email" placeholder='Write your email addres' />
                        <ButtonBlack text="Subscribe"/>    
                    </form>
                </div>
            </div>}
            {white && <div className={classes.subscribe_part_white}>
                <div className={classes.subscribe_header_sec}>
                    Subscribe for our Updates
                </div>
                <div className={classes.subscribe_right}>
                    <div className={classes.subscribe_form_part_sec}>
                        <form>
                            <input type="email" placeholder='Write your email addres' />
                            <ButtonBlack text="Subscribe"/>    
                        </form>
                    </div>
                    <div className={classes.subscribe_privacy_sec}>
                        <div>By entering your email address below, you can consent to receiving our 
                            newsletter with access to our latest collections.
                        </div>
                        <div>
                            <a>Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
  }
  export default Subscribe