import React from 'react'

const PopularPosts = (props) => {
    return (
        <div className='popular-posts-wrapper'>
            <div className='popular-posts-title'>Popular Posts</div>
            <ul>
                {
                    props.popularPosts.map(post => {
                        return <li>
                            <img src={post.imageUrl} alt={post.alt} />
                            <div>
                                <span>{post.title}</span>
                                <br />
                                <span>{post.subTitle}</span>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default PopularPosts