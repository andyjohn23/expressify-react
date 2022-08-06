import React from 'react'
import HomeSlider from '../components/Homeslider/HomeSlider'
import Topbar from '../components/Topbar/Topbar'
import "./HomePage.css"

function HomePage() {
    return (
        <div className='homePage__container'>
            <div className='navbar'>
                <Topbar />
            </div>
            <div className='slider'>
                <HomeSlider />
            </div>
        </div>
    )
}

export default HomePage