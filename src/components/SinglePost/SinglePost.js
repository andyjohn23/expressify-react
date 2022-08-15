import React, { useEffect, useState } from 'react'
import "./SinglePost.css"
import singleImage from "../../assets/images/blog.png"
import { Avatar } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router";
import axios from 'axios'

function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get("http://localhost:3000/api/posts/" + path)
            setPost(response.data)
        }
        getPost()
    }, [path])

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get("http://localhost:3000/api/users")
            setUser(response.data)
        }
        getUser()
    }, [])

    return (
        <div className='singlePost__container'>
            <div className='post__owner'>
                <Avatar src={singleImage} className='user__avatar' />
                <span>{post.user?.username}</span>
            </div>
            <div className='singlePost__content'>
                <div className='editIcons'>
                    <div className='title'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='Icons'>
                        <EditIcon className='editIcon' style={{ cursor: "pointer" }} />
                        <DeleteIcon className='deleteIcon' style={{ cursor: "pointer" }} />
                    </div>
                </div>
                <img src={singleImage} alt="postimage" className='postImage' />
                <p>{post.content}</p>
            </div>
        </div>
    )
}

export default SinglePost