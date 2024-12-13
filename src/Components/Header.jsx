// src/components/Header.jsx
import React from 'react';
import '../style/style.css';

const Header = () =>  {
  return(
    <>
     <header>
        <div class="intro-text">
            <h1 class="intro-heading">Hi!<div>I'm <span class="heading-inverted"> Palak</span> </div>
        </h1>
        <p>an experienced Full-Stack Developer with expertise in creating end-to-end web applications. 
            I specialize in building intuitive, responsive frontends and robust, 
            scalable backends using modern frameworks and technologies. 
            My ability to work across the entire development stack enables me 
            to deliver seamless user experiences and efficient solutions tailored to project needs.
            With a commitment to writing clean, maintainable code and staying updated on industry trends, 
            I continuously enhance my skills to deliver high-quality results. 
            I excel in collaborating with cross-functional teams, ensuring smooth project execution 
            and achieving client satisfaction. </p>
    </div>
    </header></>
  )
};

export default Header;
