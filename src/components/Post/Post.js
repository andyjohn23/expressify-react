import React from 'react'
import "./Post.css"
import postImage from "../../assets/images/blog.png"
import { Avatar } from "@mui/material"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Post({ post }) {
    return (
        <div className='post__container'>
            <Card className='post__card'>
                <Link to="" style={{ textDecoration: "none" }}>
                    <Card.Title>
                        <div className='post__owner'>
                            <Avatar src={postImage} className='user__avatar' />
                            <span>{post.user?.username}</span>
                        </div>
                    </Card.Title>
                </Link>
                <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
                    <Card.Img src={postImage} className="post__image" />
                    <Card.Body className='post__body'>
                        <Card.Title className='post__title'>{post.title}</Card.Title>
                        <Card.Text className='post__content'>{post.content.substring(0, 250)}...</Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </div>
    )
}

export default Post