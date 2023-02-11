import React from 'react'

const BlogCard2 = (props) => {
  return (
    <div className='blog-card2'>
    <img src={props.data.imageUrl} className='card-image' alt="woods image" />
    <div className='card-data-wrapper'>
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
    </div>
  </div>
  )
}

export default BlogCard2