import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (

        <div className={s.content}>
            <div className={s.size}>
            </div>
            <div className={s.ava}>
                <img src={props.profile.photos.small} alt=""/>
                <ProfileStatus
                    updateStatus={props.updateStatus}
                    status={props.status}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
