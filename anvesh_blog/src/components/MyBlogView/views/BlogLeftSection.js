import React from 'react'
import BlogCard from './BlogCard'

const BlogLeftSection = (props) => {
  
  return (
    <div className='blog-left-section'>
      {
        props.blogItemsData.map(item => {
          return <BlogCard data={item} />
        })
      }
      </div>
  )
}

export default BlogLeftSection