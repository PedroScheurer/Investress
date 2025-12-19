import { useState } from "react"
import { Outlet } from "react-router"
import { MainNavigation, NavButton } from "../components"
import classes from "./RootLayout.module.css"

const RootLayout = () => {
    const [navStatus, setNavStatus] = useState<boolean>(true)

    const toggleNav = () => {
        setNavStatus(!navStatus)
    }

    return (
        <div className={classes.layout}>
            <MainNavigation navStatus={navStatus} />
            <main className={classes.content}>
                <Outlet />
            </main>
            <NavButton toggleNav={toggleNav} />
        </div>
    )
}

export default RootLayout