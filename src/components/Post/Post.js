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
            <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
                <Card className='post__card'>
                    <Card.Body>
                        <Card.Title>
                            <div className='post__owner'>
                                <div className="post__avatar">
                                    <Avatar src={postImage} className='user__avatar' />
                                    <span>{post.user?.username}</span>
                                </div>
                                <div className="post__time">
                                    {post.created_at}
                                </div>
                            </div>
                        </Card.Title>
                    </Card.Body>
                    <Card.Img src={postImage} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default Post