import React from 'react'
import BlogCard from './BlogCard';

function ProfileCard() {
    const profileCard = {
        title: "Ashu Katiyar",
        description: "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
        imageUrl: "https://www.w3schools.com/w3images/avatar_g.jpg"
    
    }

  return (
    <div className='profile-card'>
     <BlogCard title={profileCard.title} description= {profileCard.description} img={profileCard.imageUrl} />
    </div>
  )
}

export default ProfileCard;