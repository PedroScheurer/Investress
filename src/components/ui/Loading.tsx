import classes from "./Loading.module.css"

const Loading = () => {
    return (
        <>
            <div className={classes.background_overlay}></div>
            <div className={classes.loading}>
                <div className={classes.spinner}></div>
            </div>
        </>
    )
}

export default Loading