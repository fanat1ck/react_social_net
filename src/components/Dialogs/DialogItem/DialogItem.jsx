import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const UserDialogItem = (props) => {
  return (
    <div className={s.item}>
      <NavLink to={"/dialogs" + props.id} className={(navData) => (navData.isActive ? s.active : s.item)}>{props.name}</NavLink>
    </div>
  );
};

export default UserDialogItem;
