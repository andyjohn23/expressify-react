import React from 'react'
import "./HomeSlider.css"
import { Link } from "react-router-dom"
import SliderImage from "../../assets/images/blog.png"

function HomeSlider() {
    return (
        <div className='homeSlider__container'>
            <div className='homeSlider__left'>
                <h1>Express Yourself.</h1>
                <p>Discover stories, thinking, and expertise from writers on any topic.</p>
                <Link to="" style={{ textDecoration: "none" }}>
                    <button>Start reading</button>
                </Link>
            </div>
            <div className='homeSlider__right'>
                <img src={SliderImage} alt="blogImage" />
            </div>
        </div>
    )
}

export default HomeSlider