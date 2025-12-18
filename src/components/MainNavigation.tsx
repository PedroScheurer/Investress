import { NavLink } from "react-router"
import classes from "./MainNavigation.module.css"
import logo from "../assets/logo.png"

const MainNavigation = () => {
    return (
        <nav className={classes.navContainer}>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <NavLink to='/carteira' className={({ isActive }) => isActive ? classes.active : undefined}>Carteira</NavLink>
                </li>
                <li>
                    <NavLink to='/testes' className={({ isActive }) => isActive ? classes.active : undefined}>Testes</NavLink>
                </li>
            </ul>
        </nav >
    )
}

export default MainNavigation