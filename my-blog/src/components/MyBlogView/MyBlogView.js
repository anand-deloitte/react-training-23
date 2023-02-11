import React from 'react'
import BlogLeftSection from './views/BlogLeftSection'
import BlogRightSection from './views/BlogRightSection'
import './myBlogView.scss'

const MyBlogView = () => {
  const blogItemsData = [
    {
      title: "TITLE HEADING",
      subTitle: "Title description,December 3, 2022",
      description: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      imageUrl: "https://www.w3schools.com/w3images/woods.jpg"
    },
    {
      title: "BLOG ENTRY",
      subTitle: "Title description,December 3, 2022",
      description: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      imageUrl: "https://www.w3schools.com/w3images/bridge.jpg"
    }
  ];

  const popularPosts = [
    {
      title: 'Lorem',
      subTitle: 'Sed mattis nunc',
      imageUrl: 'https://www.w3schools.com/w3images/workshop.jpg',
      alt: 'workshop image'
    },
    {
      title: 'Lorem',
      subTitle: 'Sed mattis nunc',
      imageUrl: 'https://www.w3schools.com/w3images/gondol.jpg',
      alt: 'gondol image'
    },
    {
      title: 'Lorem',
      subTitle: 'Sed mattis nunc',
      imageUrl: 'https://www.w3schools.com/w3images/skies.jpg',
      alt: 'skies image'
    },
    {
      title: 'Lorem',
      subTitle: 'Sed mattis nunc',
      imageUrl: 'https://www.w3schools.com/w3images/rock.jpg',
      alt: 'rock image'
    }
  ];

  const tags = ['Travel','New York','London','IKEA','NORWAY','DIY','Ideas','Baby','Family','News','Clothing','Sports','Games'];
  
  const cardRight = {
    title: "My Name",
    description: "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
    imageUrl: "https://www.w3schools.com/w3images/avatar_g.jpg"
  }
  
  return (
    <div className='blog-view-container'>
      <BlogLeftSection blogItemsData={blogItemsData} />
      <BlogRightSection popularPosts={popularPosts} tags={tags} cardRight={cardRight} />
    </div>
  )
}

export default MyBlogView