import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost'
import Topbar from '../../components/Topbar/Topbar'
import "./SinglePage.css"

function SinglePage() {
  return (
    <div className='singlePage__container'>
      <div className='navbar'>
        <Topbar />
      </div>
      <div className='singlepost__content container-fluid'>
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  )
}

export default SinglePage