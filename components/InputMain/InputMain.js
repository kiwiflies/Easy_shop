import React,  { useState } from 'react';
import classes from "./styles.module.scss"

function InputMain ({type="text", name, placeholder, value, onChange}) {

   
    const [passwordShown, setPasswordShown] = useState(type === 'password' ? true : false);

    const togglePassword = () => {
      setPasswordShown(!passwordShown);
    };

        return(
                <div style={{position:"relative"}}>
                    <input 
                       type={passwordShown ? "password" : {type}}
                       name={name}
                       placeholder={placeholder}
                       className={classes.main_input}
                       value={value}
                       onChange={onChange}
                     />
                     <span className={classes.input_text}>{placeholder}</span>
                     {type==="password" && <span className={classes.show_pass} 
                                                onClick={togglePassword}>
                                                {passwordShown ? "Show Password" : "Hide Password"}
                                            </span>}
                </div>
            )
        }
        
        
    export default InputMain
