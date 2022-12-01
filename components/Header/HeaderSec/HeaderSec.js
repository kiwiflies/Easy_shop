import classes from './styles.module.scss'
import MenuIconsSec from '../../MenuIcons/MenuIconsSec';
import MenuLinks from '../../MenuLinks/MenuLinks';
import Logo from '../../Logo/Logo';



function HeaderSec() {
  return (
    <header className={classes.headersec}>
      <div className="container">
            <div className='flex between a-center'>
              <div className={classes.headersec_menu}>
                <MenuLinks header/>
              </div>
              <div className={classes.headersec_logo}>
                <Logo black/>
              </div>
              <div className={classes.headersec_icons}>
                <MenuIconsSec text/>
              </div>
            </div>
        </div>
    </header>
  );
}
export default HeaderSec
