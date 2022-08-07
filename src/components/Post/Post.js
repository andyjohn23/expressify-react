import React from 'react'
import "./Post.css"
import postImage from "../../assets/images/blog.png"
import { Avatar } from "@mui/material"
import { Link } from 'react-router-dom'

function Post() {
    return (
        <div className='post__container'>
            <Link to="" style={{ textDecoration: "none" }}>
                <div className='card post__card container-fluid'>
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
            </Link>
        </div>
    )
}

export default Post