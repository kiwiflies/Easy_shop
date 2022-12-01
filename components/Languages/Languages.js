import { useState } from 'react';
import ArmFlag from '../../public/image/arm.svg';
import RusFlag from '../../public/image/ru.svg';
import UkFlag from '../../public/image/uk.svg';
import Arrow from '../../public/image/lang_arrow.svg';
import classes from './styles.module.scss';


function Languages() {

  const languages = [
    {language: "Armenian", flag: <ArmFlag/>}, 
    {language: "Russian", flag: <RusFlag/>},
    {language: "English", flag: <UkFlag/>},
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Armenian');

  const toggling = () => {
    setIsOpen(!isOpen);
  }

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <div className={classes.language_dropdown}>
      <div onClick={toggling} className={classes.drop_header}>
          <div>
            <span>
              {selectedOption?.flag || languages[0].flag}
            </span>
            <span>
              {selectedOption?.language || languages[0].language}
            </span>
          </div>
          <div id="arrow" className={classes.arrow} style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}><Arrow/></div>
        </div>
        {isOpen && (
          <div className={classes.drop_div}>
            <ul className={classes.drop_list}>
              {languages.filter(item => item.language !== selectedOption.language)?.map(item => (
                <li onClick={onOptionClicked(item)} key={Math.random()} className={classes.drop_list_item}>
                  <span>
                    {item.flag}
                  </span>
                  <span>
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