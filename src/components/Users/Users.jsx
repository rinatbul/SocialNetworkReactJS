import React from "react";
import styles from './users.module.css';
import axios from "axios";
import avatar from '../../assets/avatar.png'
import s from './users.module.css'

export class Users extends React.Component {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];

        for (let i=1;i<=pagesCount;i++){
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(page=>{
                        return <span
                            className={this.props.currentPage === page && s.selectedPage}
                        onClick={()=>{this.props.setCurrentPage(page)}}>{page}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                     <span>
                         <div>
                             <img src={u.photos.small !== null ? u.photos.small : avatar} className={styles.userPhoto}/>
                         </div>
                         <div>
                             {u.followed
                                 ? <button onClick={() => {
                                     this.props.unfollow(u.id)
                                 }}>Unfollow</button>
                                 : <button onClick={() => {
                                     this.props.follow(u.id)
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
        )
    }
}