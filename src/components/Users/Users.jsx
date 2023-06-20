import React from 'react';
import s from "./users.module.css";
import avatar from "../../assets/avatar.png";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

export const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 15) {
            pages.push(i);
        }
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span
                    className={props.currentPage === page && s.selectedPage}
                    onClick={(e) => {
                        props.onPageChanged(page);
                    }}>{page}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                     <span>
                         <div>
                             <NavLink to={`/profile/${u.id}`}>
                                 <img src={u.photos.small !== null ? u.photos.small : avatar}
                                      className={styles.userPhoto} alt='avatar'/>
                             </NavLink>
                         </div>
                         <div>
                             {u.followed
                                 ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                           onClick={() => {

                                               props.toggleFollowingProgress(true, u.id)
                                               axios.delete(
                                                   `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                       withCredentials: true,
                                                       headers: {
                                                           'API-KEY': 'a4d5ab55-a246-4ba2-979e-ceaeeae3a94a'
                                                       }
                                                   })
                                                   .then(res => {
                                                       if (res.data.resultCode === 0) {
                                                           props.unfollow(u.id)
                                                       }
                                                       props.toggleFollowingProgress(false, u.id)
                                                   })


                                           }}>Unfollow</button>


                                 : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                           onClick={() => {
                                               props.toggleFollowingProgress(true, u.id)

                                               axios.post(
                                                   `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                   {}, {
                                                       withCredentials: true,
                                                       headers: {
                                                           'API-KEY': 'a4d5ab55-a246-4ba2-979e-ceaeeae3a94a'
                                                       }
                                                   })
                                                   .then(res => {
                                                       if (res.data.resultCode === 0) {
                                                           props.follow(u.id)
                                                       }
                                                       props.toggleFollowingProgress(false, u.id)
                                                   })
                                           }}>Follow</button>}

                         </div>
                     </span>
                <span>
                         <span>
                             <div>{u.name}</div>
                             <div>{u.status}</div>
                         </span>
                         <span>
                             <div>{"u.location.country"}</div>
                             <div>{"u.location.city"}</div>
                         </span>
                     </span>
            </div>)
        }
    </div>

}