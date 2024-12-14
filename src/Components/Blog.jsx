import React from 'react';
import '../style/style.css';
import Footer from './Footer';
import Navigation from './Navigation';
import BlogBody from './BlogBody';

const Blog = () => {
  return (
   <>
    <Navigation/>
    <BlogBody/>
      <Footer/>
   </>
  )
}

export default Blog