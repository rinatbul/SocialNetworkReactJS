import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg" width='80px' alt="User avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;