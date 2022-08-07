import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import "./Write.css"
import AddIcon from '@mui/icons-material/Add';

function Write() {
    return (
        <div className='write__container'>
            <div className='navbar'>
                <Topbar />
            </div>
            <div className='upload__form'>
                <h1>CREATE A BLOG</h1>
                <form className='postForm'>
                    <label htmlFor='fileInput'>
                        <AddIcon className='addIcon' />
                    </label>
                    <input type="file" name="" id="fileInput" style={{ display: "none" }} />
                    <textarea type="text" rows="10" cols="50" placeholder="Tell your story..."></textarea>
                    <button type='submit'>Publish</button>
                </form>
            </div>
        </div>
    )
}

export default Write