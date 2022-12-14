import Logo from '../Logo/Logo';
import MenuLinks from '../MenuLinks/MenuLinks';
import MenuIcons from '../MenuIcons/MenuIcons';
import classes from './styles.module.scss';
import NavLink from '../NavLink/NavLink';
import CustomLink from '../CustomLink/CustomLink';
import Subscribe from '../Subscribe/Subscribe';
import { FacebookIcon, PinterestIcon, InstagramIcon, YoutubeIcon } from '../Icons';
import { useTranslation } from "react-i18next";


function Footer({categories}) {

  const {t} = useTranslation();

    return (
        <div className={classes.footer_main}>
            <div className='container'>
                <div className='flex between'>
                    <Logo white/>
                    <div style={{lineHeight:"12px"}}>
                        <MenuIcons text/>
                    </div>
                </div>
                    <div className='container flex'>
                        <div className={classes.footer_left}>
                            <div className='flex column'>
                                <div className={classes.footer_headers}>
                                    {t("shop")}
                                </div>
                                <div className={classes.links_column}>
                                    <MenuLinks categories={categories}/>
                                </div>
                            </div>
                            <div className='flex column'>
                                <div className={classes.footer_headers}>
                                    {t("corporate")}
                                </div>
                                <div className='flex column'>
                                    <NavLink href='career'>
                                        {t("career")}
                                    </NavLink>
                                    <NavLink href='about'>
                                        {t("about_us")}
                                    </NavLink>
                                    <NavLink href='shipping'>
                                        {t("shipping_policy")}
                                    </NavLink>
                                    <NavLink href='return'>
                                        {t("return_policy")}
                                    </NavLink>
                                    <NavLink href='privacy'>
                                        {t("privacy_policy_short")}
                                    </NavLink>
                                </div>
                            </div>
                            <div className='flex column'>
                                <div className={classes.footer_headers}>
                                    {t("find_us")}
                                </div>
                                <div className='flex column'>
                                    <CustomLink href="#" 
                                        icon={<PinterestIcon/>} 
                                        text="Pinterest"/>
                                    <CustomLink href="#" 
                                        icon={<FacebookIcon/>} 
                                        text="Facebook"/>
                                    <CustomLink href="#" 
                                        icon={<InstagramIcon/>} 
                                        text="Instagram"/>
                                    <CustomLink href="#" 
                                        icon={<YoutubeIcon/>}  
                                        text="Youtube"/>
                                </div>
                            </div>
                        </div>
                        <div className={classes.footer_right}>
                            <Subscribe black/>
                        </div>
                    </div>
                <div className={classes.footer_copyright}>
                    Copyright ?? 2022 Shop - All rights reserved. Licence #2259959/8/8966 and 4587/1/1965
                </div>
            </div>
        </div>
    )
  }
  export default Footer