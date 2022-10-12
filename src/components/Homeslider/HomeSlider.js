import React from 'react'
import "./HomeSlider.css"
import { Link } from "react-router-dom"
import SliderImage from "../../assets/images/writer.webp"

function HomeSlider() {
    return (
        <div className='homeSlider__container container-fluid'>
            <div className='homeSlider__left'>
                <h1>Express yourself.</h1>
                <p>Share your stories and improve on your writing skills<br/>on any topic.</p>
                <Link to="" style={{ textDecoration: "none" }}>
                    <button type='button'>Start writing</button>
                </Link>
            </div>
            <div className='homeSlider__right'>
                <img src={SliderImage} alt="blogImage" />
            </div>
        </div>
    )
}

export default HomeSlider