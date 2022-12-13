import { useEffect, useState } from 'react';
import { ArmFlag, RusFlag, UkFlag } from "../Icons";
import Arrow from '../../public/image/lang_arrow.svg';
import classes from './styles.module.scss';
import { useWindowSize } from "../../helpers/useWindowSize";
import {useTranslation} from "react-i18next";
import {useRef} from "react";
import {useDispatch} from "react-redux";



function Languages() {

  useEffect(() => {
    window.addEventListener('click', close)
    return () => window.removeEventListener("click", close);
  }, [])
  const dispatch = useDispatch();
  const {i18n} = useTranslation();
  
  const languages = [
    {language: "Armenian", flag: <ArmFlag/>, lang: 'am'}, 
    {language: "Russian", flag: <RusFlag/>, lang: 'ru'},
    {language: "English", flag: <UkFlag/>, lang: 'en'},
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({})
  useEffect(() => {
    let flag = localStorage.getItem('userLanguage') ? languages.filter(item => item.lang === localStorage.getItem('userLanguage')) : [languages[0]]
    setSelectedOption(...flag)
  }, [])
  
  const toggling = (e) => {
    setIsOpen(!isOpen);
    e.stopPropagation()  
    
  }
  const handleClickLanguage = (lang) => {
    localStorage.setItem('userLanguage', lang)
    i18n.changeLanguage(lang);
    window.location.reload()
};

  const onOptionClicked = value => {
    console.log(value);
    setSelectedOption(value);
    setIsOpen(false);
  };

  const [width] = useWindowSize();

  return (
    <div className={classes.language_dropdown}>
      <div onClick={toggling} className={classes.drop_header}>
          <div>
            <span>
              {selectedOption?.flag}
            </span>
            <span style={{ display: width <= 767 ? "none" : ""}}>
              {selectedOption?.language}
            </span>
          </div>
          <div id="arrow" className={classes.arrow} style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',  display: width <= 767 ? "none" : ""}}><Arrow/></div>
        </div>
        {isOpen && (
          <div className={classes.drop_div}>
            <ul className={classes.drop_list}>
              {languages.filter(item => item.language !== selectedOption?.language)?.map(item => (
                <li onClick={() => {
                  onOptionClicked(item)
                  handleClickLanguage(item.lang)
                  }} key={Math.random()} className={classes.drop_list_item}>
                  <span>
                    {item.flag}
                  </span>
                  <span style={{ display: width <= 767 ? "none" : ""}}>
                    {item.language}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
    </div>
  );
}
  export default Languages