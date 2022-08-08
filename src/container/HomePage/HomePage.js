import React, { useState, useEffect } from 'react'
import HomeSlider from '../../components/Homeslider/HomeSlider'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import Topbar from '../../components/Topbar/Topbar'
import "./HomePage.css"
import axios from 'axios'

function HomePage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get("http://localhost:3000/api/posts")
            setPosts(response.data)
        }
        fetchPost()
    }, [])

    return (
        <div className='homePage__container'>
            <div className='navbar'>
                <Topbar />
            </div>
            <div className='slider'>
                <HomeSlider />
            </div>
            <div className='homePage__content container-fluid'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </div>
    )
}

export default HomePage