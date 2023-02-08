import { useState } from 'react';

const BlogCard = (props) => {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count+1);
  }
  return (
    <div className='blog-card'>
      <img src={props.data.imageUrl} className='card-image' alt="woods image" />
      <div className='card-data-wrapper'>
        <h3>{props.data.title}</h3>
        <h5>{props.data.subTitle}</h5>
        <p>{props.data.description}</p>
        <div className='card-bottom-wrapper'>
          <button class="btn-primary">READ MORE »</button>
          <span onClick={updateCount}>Comments <span className='card-bottom-count'>{count}</span></span>
        </div>
      </div>
    </div>
  )
}

export default BlogCard