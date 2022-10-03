import React, { useContext, useEffect, useState } from 'react'
import "./SinglePost.css"
import singleImage from "../../assets/images/blog.png"
import { Avatar } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation } from "react-router";
import axios from 'axios'
import { Context } from '../../context/Context';

function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [modeUpdate, setModeUpdate] = useState(false);

    const handleDelete = async (e) => {
        try {
            await axios.delete("http://localhost:3000/api/posts/" + path)
            window.location.replace("/")
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get("http://localhost:3000/api/posts/" + path)
            setPost(response.data)
        }
        getPost()
    }, [path])

    return (
        <div className='singlePost__container'>
            <div className='post__owner'>
                <Avatar src={singleImage} className='user__avatar' />
                <span>{post.user?.username}</span>
            </div>
            <div className='singlePost__content'>
                <div className='editIcons'>
                    {modeUpdate ?
                        <input type="text" placeholder="Title" className='title'
                            value={post.title} name="title" onChange={(e) => setTitle(e.target.value)} /> : (
                            <div className='title'>
                                <h1>{post.title}</h1>
                            </div>
                        )
                    }
                    {post.user?.id === user?.id && (
                        <div className='Icons'>
                            <EditIcon className='editIcon' style={{ cursor: "pointer" }}
                                onClick={() => setModeUpdate(true)}
                            />
                            <DeleteIcon className='deleteIcon' style={{ cursor: "pointer" }}
                                onClick={handleDelete}
                            />
                        </div>
                    )}
                </div>
                {/* <img src={singleImage} alt="postimage" className='postImage' /> */}
                {modeUpdate ?
                    <textarea type="text" name='content' rows="10" cols="50" placeholder="Write something interesting..."
                        value={post.content} onChange={(e) => setContent(e.target.value)}
                    ></textarea> : (
                        <p>{post.content}</p>
                    )
                }
            </div>
        </div>
    )
}

export default SinglePost