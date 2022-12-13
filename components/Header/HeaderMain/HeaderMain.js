import classes from './styles.module.scss';
import Logo from '../../Logo/Logo';
import Search from '../../Search/Search';
import Languages from '../../Languages/Languages';
import CustomLink from '../../CustomLink/CustomLink';
import { MapPinIcon, PhoneIcon } from '../../Icons';
import MenuIcons from '../../MenuIcons/MenuIcons';
import MenuLinks from '../../MenuLinks/MenuLinks';
import { useTranslation } from "react-i18next";



function HeaderMain({categories}) {

  const {t} = useTranslation();

  return (
    <header className={classes.headermain}>
        <div className="container">
          <div className="flex j-center">
            <div className={classes.top_links}>
              <CustomLink  href="tel:" 
                            icon={<PhoneIcon/>} 
                            text="(374) 93 122545"/>
            </div>
            <div className={classes.top_links}>
              <CustomLink  href="https://goo.gl/maps/Lc5nvaphFMEYsuFXA" 
                            icon={<MapPinIcon/>} 
                            text={t("address")}/>
            </div>
          </div>
          <div className='flex between'>
            <div className='grow'>
              <Logo black/>
            </div>
            <div className='block grow'>
              <Search big/>
            </div>
            <div className='flex justify-end grow'>
              <Languages/>
            </div>
          </div>
          <div className={classes.navbar_part}>
            <div className={classes.links_row}>
              <MenuLinks categories={categories} secondary/>
            </div>
            <div className={classes.links_icons}>
              <MenuIcons/>
            </div>
          </div>
        </div>
    </header>
  );
}
export default HeaderMain
