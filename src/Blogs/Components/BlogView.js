import React from 'react'
import BlogListItem from './BlogListItem'
import ProfileCard from './ProfileCard'
import PopularPostCard from './PopularPostCard'
import TagCard from './TagCard'

function BlogView() {
  return (
    <div>
    <div className="blog-container">
      <div className="left-container">
        <BlogListItem/>
      </div>

      <div className="right-container">
      <ProfileCard />
      <PopularPostCard/>
      <TagCard/>
      </div>
    </div>
  </div>
  )
}

export default BlogView