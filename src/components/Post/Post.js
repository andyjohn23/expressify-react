import React from 'react'
import "./Post.css"
import postImage from "../../assets/images/blog.png"
import { Avatar } from "@mui/material"

function Post() {
    return (
        <div className='post__container'>
            <div className='card post__card'>
                <div className='post__content'>
                    <div className='post__owner'>
                        <Avatar src={postImage} className='user__avatar' />
                        <span>Andy John</span>
                    </div>
                    <h1>COVID-19 and the End of Plans</h1>
                    <p>
                        Along with everything else this virus took from us,
                        it took away this thing we used to consider plans.
                    </p>
                </div>
                <div className='post__image'>
                    <img src={postImage} alt="post-image" />
                </div>
            </div>
        </div>
    )
}

export default Post