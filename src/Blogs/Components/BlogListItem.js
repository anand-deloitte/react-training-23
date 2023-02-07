import React from 'react'
import { useState } from 'react';
import BlogCard from './BlogCard';

function BlogListItem() {
    const [count, setCount] = useState(0);
    const updateCount = () => {
    setCount(count+1);
  }
    const blogItems = [
        { 
          id:1,
          title: "TITLE HEADING",
          subTitle: "Title description,December 3, 2022",
          description: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
          imageUrl: "https://www.w3schools.com/w3images/woods.jpg"
        },
        {
          id:2,
          title: "BLOG ENTRY",
          subTitle: "Title description,December 3, 2022",
          description: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
          imageUrl: "https://www.w3schools.com/w3images/bridge.jpg"
        }
      ];
    return (
        <div>{blogItems.map(item=> {
            return <BlogCard key={item.id} title={item.title} subTitle={item.subTitle} description= {item.description} img={item.imageUrl}>
                <div className='w3-row w3-margin-bottom'>
                 <div className='w3-col m8 s12'><button className='w3-button w3-padding-large w3-white w3-border w3-padding-large w3-left '>READ MORE »</button></div>
                <div className='w3-col m4 w3-hide-small'><span className='w3-padding-large w3-right' onClick={updateCount}>Comments <span className='card-count w3-badge'>{count}</span></span></div>
                </div>
            </BlogCard>
          })}
        </div>
    )
}

export default BlogListItem;