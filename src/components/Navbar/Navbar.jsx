import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css";

const NavBarMenu = (props) => {
    return (
        <div className={s.item}>
            <NavLink
                to={"/" + props.menu}
                className={(navData) => (navData.isActive ? s.active : s.item)}>
                {props.name}
            </NavLink>
        </div>
    );
};

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavBarMenu menu="profile" name="Profile"/>
            <NavBarMenu menu="dialogs" name="Dialogs"/>
            <NavBarMenu menu="news" name="News"/>
            <NavBarMenu menu="music" name="Music"/>
            <NavBarMenu menu="story" name="Story"/>

            <NavBarMenu menu="settings" name="Settings"/>
        </nav>
    );
};

export default Navbar;
