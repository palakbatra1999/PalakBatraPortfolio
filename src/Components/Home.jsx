import React from 'react'
import Navigation from './Navigation';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import '../style/style.css';

const Home = () => {
  return (
    <>
     <Navigation/>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default Home