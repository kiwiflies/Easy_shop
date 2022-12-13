import classes from './styles.module.scss';
import { SearchIcon } from '../Icons';
import { useTranslation } from 'react-i18next';

function Search({big, small}) {

  const {t} = useTranslation();

    return (
        <>
        {big && <>
        <div style={{position:"relative"}}>
            <input type='search' placeholder={t("search")} className={classes.search_input}/>
            <span className={classes.search_icon}>
                <SearchIcon/>
            </span>
        </div></>}
        {small && <> 
        <div style={{position:"relative", display:"block"}}>
            <input type='search' placeholder='Search' className={classes.search_input_small}/>
            <span className={classes.search_icon_sec}>
                <SearchIcon/>
            </span>
        </div></>}
        </>
    )
  }
  export default Search