import React from 'react'
import HomeSlider from '../components/Homeslider/HomeSlider'
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
            <div className='homePage__content'>
                <Sidebar />
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
            </div>
        </div>
    )
}

export default HomePage