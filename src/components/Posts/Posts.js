import React from 'react'
import Post from '../Post/Post'
import "./Posts.css"

function Posts({ posts }) {
  return (
    <div className='posts_container'>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  )
}

export default Posts