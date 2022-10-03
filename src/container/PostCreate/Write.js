import React, { useContext, useState } from 'react'
import Topbar from '../../components/Topbar/Topbar'
import "./Write.css"
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { Context } from '../../context/Context';

function Write() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const { user } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            user_id: user.id,
            title,
            content
        }
        try {
            const response = await axios.post("http://localhost:3000/api/posts", newPost)
            window.location.replace("/post/" + response.data._id);
            console.log(response)
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div className='write__container'>
            <div className='navbar'>
                <Topbar />
            </div>
            <div className='upload__form'>
                <h1>CREATE A BLOG</h1>
                <form className='postForm' onSubmit={handleSubmit}>
                    <label htmlFor='fileInput'>
                        <AddIcon className='addIcon' />
                        <input type="text" placeholder="Title" className='postTitle'
                            value={title} name="title" onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <input type="file" name="" id="fileInput" style={{ display: "none" }} />
                    <textarea type="text" name='content' rows="10" cols="50" placeholder="Write something interesting..."
                        value={content} onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                    <button type='submit'>Publish</button>
                </form>
            </div>
        </div>
    )
}

export default Write