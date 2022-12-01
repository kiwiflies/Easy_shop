import classes from './styles.module.scss';
import { HeartThird, AccountThird, BagThird } from '../Icons';

function MenuIcons () {
    return (
        <div className={classes.menu_icons}>
            <a href="#" target='_blank' rel="noreferrer">
                <div className='flex column a-center'>
                    <AccountThird/>
                </div>
            </a>
            <a href="#" target='_blank' rel="noreferrer">
                <div className='flex column a-center'>
                    <HeartThird/>
                </div>
            </a>
            <a href="#" target='_blank' rel="noreferrer">
                <div className='flex column a-center'>
                    <BagThird/>
                </div>
            </a>
        </div>
    );
  }
  export default MenuIcons