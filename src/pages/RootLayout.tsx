import { Outlet } from "react-router"
import { MainNavigation } from "../components"
import classes from "./RootLayout.module.css"

const RootLayout = () => {
    return (
        <div className={classes.layout}>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout