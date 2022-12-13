import classes from './styles.module.scss';


export default function BurgerMenu({ isOpen }){
    return(
        <>
            <div className={classes.hamburger}>
                <div className={classes.burger} style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}}/>
                <div className={classes.burger} style={{transform: isOpen ? 'translateX(100%)' : 'translateX(0)', display: isOpen ? "none" : ""}}/>
                <div className={classes.burger} style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}/>
            </div>
        </>
    )
}