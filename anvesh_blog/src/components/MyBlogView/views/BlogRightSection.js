import React from 'react'
import BlogCard2 from './BlogCard2'
import PopularPosts from './PopularPosts'
import Tags from './Tags'

const BlogRightSection = (props) => {
  return (
    <div className='blog-right-section'>
      <BlogCard2 data={props.cardRight} />
      <PopularPosts popularPosts={props.popularPosts} />
      <Tags tags={props.tags} />
    </div>
  )
}

export default BlogRightSection