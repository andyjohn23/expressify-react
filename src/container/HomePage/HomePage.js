import React, { useState, useEffect } from 'react'
import HomeSlider from '../../components/Homeslider/HomeSlider'
import Posts from '../../components/Posts/Posts'
import Topbar from '../../components/Topbar/Topbar'
import "./HomePage.css"
import axios from 'axios'

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get("https://expressify-rails-andy.herokuapp.com/api/posts")
            setPosts(response.data)
        }
        fetchPost()
    }, [])

    useEffect(() => {
        const getUser = async () => {
            const response = await axios.get("https://expressify-rails-andy.herokuapp.com/api/users")
            setUser(response.data)
        }
        getUser()
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
                <h1>discover more of what matters to you</h1>
                <div className='row'>
                    <div className='col-md-3'>
                        <Posts posts={posts} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage