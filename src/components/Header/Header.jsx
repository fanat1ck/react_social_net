import React from "react";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img src="https://cdn-icons-png.flaticon.com/512/179/179337.png" alt=""/>
            <div className={classes.login}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }

            </div>

        </header>
    );
};

export default Header;
