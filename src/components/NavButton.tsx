import classes from "./NavButton.module.css"
import menuBurguer from "../assets/menu-burger.svg"

type Props = {
    toggleNav: () => void,
}

const NavButton: React.FC<Props> = ({ toggleNav }) => {

    return (
        <div className={classes.nav_button} onClick={toggleNav}>
            <img src={menuBurguer} alt="Menu Button" />
        </div>
    )
}

export default NavButton