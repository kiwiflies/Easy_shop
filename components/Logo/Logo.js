import classes from './styles.module.scss';
import Image from 'next/image';
import NavLink from '../NavLink/NavLink';
import { useWindowSize } from "../../helpers/useWindowSize";

function Logo(props) {

    const [width, height] = useWindowSize();

    return (
        <>
            {props.black &&<> 
            <NavLink href="/" className={classes.logo}>
                <Image src="/image/Logo.svg" layout='fill' alt="joheny" priority/>
            </NavLink></>}
            {props.white &&<> 
            <NavLink href="" className={classes.logo_sec}>
                <Image src="/image/Logo_white.svg" layout='fill' alt="joheny" priority/>
            </NavLink></>}
            {props.small &&<> 
            <NavLink href="" className={classes.logo_third}>
                <Image src="/image/Logo_small.svg" layout='fill' alt="joheny" priority/>
            </NavLink></>}
        </>
    )
  }
  export default Logo