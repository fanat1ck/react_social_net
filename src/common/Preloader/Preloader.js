import preloader from "../../assets/image/preloader.gif";
import React from "react";
import classes from './Preloader.module.css';


let Preloader = () => {
    return (

        <div className={classes.loader_wrapper}>
            <div className={classes.loader}></div>
        </div>

        // <img width='100' src={preloader} alt=""/>

    )


}

export default Preloader;