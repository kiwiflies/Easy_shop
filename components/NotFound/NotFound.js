import React from 'react';
import classes from './styles.module.scss';
import line from '../../public/image/error_line.png';
import ButtonWhite from '../Buttons/ButtonWhite/ButtonWhite';
import NavLink from '../NavLink/NavLink';


function NotFound() {

    return (
        <div className={classes.notFound}>
            <h2>Page not found</h2>
            <img src={line.src} alt='not-found-line' className={classes.line}/>
            <img src={line.src} alt='not-found-line' className={classes.line}/>
            <div className={classes.back}>
                <div>Sorry, But we did not find the page you were looking for.</div>
                <NavLink href="">
                        <ButtonWhite className='btn2' text="Back to Home"/>
                </NavLink>
            </div>
        </div>
    );
}

export default NotFound;