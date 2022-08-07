import React from 'react'
import "./SinglePost.css"
import singleImage from "../../assets/images/blog.png"
import { Avatar } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function SinglePost() {
    return (
        <div className='singlePost__container'>
            <div className='post__owner'>
                <Avatar src={singleImage} className='user__avatar' />
                <span>Andy John</span>
            </div>
            <div className='singlePost__content'>
                <h1>COVID-19 and the End of Plans</h1>
                <div className='editIcons'>
                    <EditIcon className='editIcon' style={{cursor: "pointer"}} />
                    <DeleteIcon className='deleteIcon' style={{cursor: "pointer"}} />
                </div>
                <img src={singleImage} alt="postimage" className='postImage' />
                <p>
                    We didn’t have a family Christmas this year,
                    I got COVID. I had gone down to New York City
                    for a work dinner on a Wednesday night in December,
                    pretty sure that’s what got me. More than two hours
                    unmasked in a packed restaurant while Omicron raged.
                    By Friday my throat felt a little strange. By Saturday
                    afternoon the throat issue had been joined by a persistent
                    headache and I decided to take a rapid test, which immediately
                    displayed as positive. Standing in our bedroom on the afternoon
                    of December 18 I texted my wife, who was downstairs with our two
                    college-aged daughters, suitcases more or less packed for the
                    five-hour drive to grandma and grandpa’s house and the customary
                    expectation of days with extended family and friends.
                    “Think about what we would do if I had COVID.”
                </p>
            </div>
        </div>
    )
}

export default SinglePost