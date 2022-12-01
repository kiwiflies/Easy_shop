import classes from './styles.module.scss'
import MenuIconsThird from '../../MenuIcons/MenuIconsThird';
import MenuLinks from '../../MenuLinks/MenuLinks';
import Logo from '../../Logo/Logo';
import Search from '../../Search/Search';



function HeaderSec() {
  return (
    <header className={classes.headerthird}>
      <div className="container">
            <div className='flex between a-center'>
                <div className={classes.headerthird_logo}>
                    <Search small/>
                    <Logo small/>
                </div>
                <div className={classes.headerthird_menu}>
                    <MenuLinks header secondary/>
                </div>
                <div className={classes.headerthird_icons}>
                    <MenuIconsThird />
                </div>
            </div>
        </div>
    </header>
  );
}
export default HeaderSec
