import React from "react";
import styles from './Story.module.css'
import userPhoto from '../../assets/image/image_avatar.png'
import {NavLink} from "react-router-dom";

let Story = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // alert(props.isAuth)
    return (

        <div>
            {pages.map(p => {
              
                return <span onClick={() => props.onChangePage(p)}
                             className={props.setCurrentPage === p && styles.selected}>{p}
                       </span>
            })}
            {props.usersData.map(u => <div key={u.key}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                      <img alt={''} src={u.photos.small != null ? u.photos.small : userPhoto}
                           className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>{u.followed
                    ? <button disabled={props.toggleProgress.some(id => id === u.id)}
                              onClick={() => props.unfollow(u.id)}>Unfollow</button>
                    : <button disabled={props.toggleProgress.some(id => id === u.id)}
                              onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div></span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
            </div>)
            }
        </div>)

}

export default Story;
