import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='blog-header-container'>
        <h1>MY BLOG</h1>
        <span className='welcome-text'>Welcome to the blog <span className='username'>OG</span></span>
    </div>
  )
}

export default Header