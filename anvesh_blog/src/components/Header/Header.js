import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className='blog-header-container'>
        <h1>MY BLOG</h1>
        <span className='welcome-text'>Welcome to the blog of <span className='username'>Anvesh</span></span>
    </div>
  )
}

export default Header