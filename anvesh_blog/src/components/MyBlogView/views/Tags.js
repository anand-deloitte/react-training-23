import { useState } from 'react';

const Tags = (props) => {
  const [selectedIndex, setIndex] = useState(0);

  const handleTagClick = (tag,number) => {
    setIndex(number);
    window.open('/'+tag);
  }
  
  return (
    <div className='tags-wrapper'>
        <div className='tags-title'>Tags</div>
        <div className='tags-list-wrapper'>
            {
                props.tags.map((tag,index) => {
                    return <span className={`tag-text ${index === selectedIndex ? 'active': ''}`} onClick={() => handleTagClick(tag,index)}>{tag}</span>
                })
            }
        </div>
    </div>
  )
}

export default Tags