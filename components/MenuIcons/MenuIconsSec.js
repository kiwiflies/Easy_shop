import classes from './styles.module.scss';
import { HeartSec, AccountSec, BagSec } from '../Icons';

function MenuIcons ({text}) {
    return (
        <div className={classes.menu_icons}>
            <a href="#" target='_blank' rel="noreferrer">
                <div className='flex column a-center'>
                    <div>
                        <AccountSec/>
                    </div>
                    {text && <span>
                        Sign in
                    </span>}
                </div>
            </a>
            <a href="#" target='_blank' rel="noreferrer">
                <div className='flex column a-center'>
                    <div>
                        <HeartSec/>
                    </div>
                    {text && <span>
                        Favourites
                    </span>}
                </div>
            </a>
            <a href="#" target='_blank' rel="noreferrer">
                <div className='flex column a-center'>
                    <div>
                        <BagSec/>
                    </div>
                    {text && <span>
                        Shopping bag<span></span>
                    </span>}
                </div>
            </a>
        </div>
    );
  }
  export default MenuIcons