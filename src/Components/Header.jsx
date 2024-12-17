// src/components/Header.jsx
import React from "react";
import "../style/style.css";

const Header = () => {
  return (
    <>
      <header class="intro">
        <div class="intro-text">
          <h1 class="intro-heading">
            Hi!
            <div>
              I'm <span class="heading-inverted"> Palak</span>{" "}
            </div>
          </h1>
          <p>
            an experienced Full-Stack Developer with expertise in creating
            end-to-end web applications. I like to make solid and scalable web
            products with great user experience.
          </p>
         
        </div>
        <img alt="" class="img" src="/img/header_pic.svg" />
      </header>
    </>
  );
};

export default Header;
