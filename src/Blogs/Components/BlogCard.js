import React from 'react'

 function BlogCard(props) {
  return (
    <div className='w3-card w3-margin w3-white'>
      <img src={props.img}  alt=''/>
      <div className='card-details'>
        <div className='w3-container'><h3>{props.title}</h3><h5>{props.subTitle}</h5></div>
        <div  className='w3-container'>
        <p>{props.description}</p>
        <div className='w3-row'>{props.children}</div></div>
      </div>
    </div>
  )
}

export default BlogCard