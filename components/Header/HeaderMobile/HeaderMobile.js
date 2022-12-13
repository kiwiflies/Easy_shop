import classes from './styles.module.scss';
import BurgerMenu from '../../BurgerMenu/BurgerMenu';
import { useState } from 'react';
import Logo from '../../Logo/Logo';
import MenuIcons from '../../MenuIcons/MenuIcons';
import { Joheny, GoBackIcon, SearchIcon, PhoneIcon, MapPinIcon } from "../../Icons";
import CustomLink from '../../CustomLink/CustomLink';
import Languages from '../../Languages/Languages';

function HeaderMobile({categories}) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

  return (
    <header className={classes.headermobile}>
        <div className='flex a-center'>
            <div className={classes.hamburger} onClick={toggleHamburger}>
                <BurgerMenu isOpen={hamburgerOpen}/>
                <div className={classes.burger_drop} style={{left: hamburgerOpen ? 0 : '-90%'}}>
                    <div className={classes.burger_drop_top}>
                        <div className={classes.burger_drop_top_right}>
                            <GoBackIcon/>
                            <Joheny/>
                        </div>
                        <BurgerMenu isOpen={hamburgerOpen}/>
                    </div>
                    <div className={classes.drop_content}>
                        <div className={classes.drop_categories}>
                            Menu
                        </div>
                        <div className={classes.drop_bottom}>
                            <div className={classes.drop_bottom_links}>
                                <div className={classes.bottom_links}>
                                    <CustomLink  href="tel:" 
                                                    icon={<PhoneIcon/>} 
                                                    text="(374) 93 122545"/>
                                </div>
                                <div className={classes.bottom_links}>
                                    <CustomLink  href="https://goo.gl/maps/Lc5nvaphFMEYsuFXA" 
                                                    icon={<MapPinIcon/>} 
                                                    text="Parpetsy str, 5"/>
                                </div>
                            </div>
                            <div className={classes.drop_bottom_icons}>
                                <SearchIcon/>
                                <MenuIcons/>
                                <Languages/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Logo black/>
        </div>
        <div className={classes.headermobile_right}>
            <SearchIcon/>
            <MenuIcons/>
        </div>
    </header>
  );
}
export default HeaderMobile
