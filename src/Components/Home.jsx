import React from 'react'
import Navigation from './Navigation';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import '../style/style.css';

const Home = () => {
  return (
    <>
   <div className='App'>
   <div className='main-content'>
    <Navigation/>
      <Header/>
      <Body/>
    </div>
      <Footer/>
   </div>
    </>
  )
}

export default Home