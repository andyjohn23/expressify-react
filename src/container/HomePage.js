import React from 'react'
import HomeSlider from '../components/Homeslider/HomeSlider'
import Posts from '../components/Posts/Posts'
import Sidebar from '../components/Sidebar/Sidebar'
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
            <div className='homePage__content container-fluid'>
                <Posts />
                <Sidebar />
            </div>
        </div>
    )
}

export default HomePage