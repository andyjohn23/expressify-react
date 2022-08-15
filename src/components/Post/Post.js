import React from 'react'
import "./Post.css"
import postImage from "../../assets/images/blog.png"
import { Avatar } from "@mui/material"
import { Link } from 'react-router-dom'

function Post({ post }) {
    return (
        <div className='post__container'>
            <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
                <div className='card post__card container-fluid'>
                    <div className='post__content'>
                        <div className='post__owner'>
                            <Avatar src={postImage} className='user__avatar' />
                            <span>{post.user?.username}</span>
                        </div>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
                    <div className='post__image'>
                        <img src={postImage} alt="post" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Post