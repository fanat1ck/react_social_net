import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}
                         updateStatus={props.updateStatus}
                         status={props.status}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
