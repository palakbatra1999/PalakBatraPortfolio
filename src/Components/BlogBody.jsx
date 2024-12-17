import React from 'react';
import '../style/style.css';


const BlogBody = () => {
  return (
   <>
    <header class="headers">
        
        <img class="img" src="/img/Blog-cover.svg" />
    </header>
    <br />
    <section class=" section ow container container-center">
        <h1>How to deploy your MERN project for free using Render.</h1>
        <p>
            Your one-stop guide for deploying a MERN (MongoDB, Express, React, Node.js) stack on Heroku  for free.
        </p>
        <div class="button">
            <a class="link link-primary" target="_blank" href="https://palakbatra.hashnode.dev/deploying-your-mern-stack-project-for-free">Read Blog
            </a>
        </div>
    </section>

    <section class=" section  container container-center">
        <h1>CSS Box-Model: For a 5-year-old</h1>
        <p>
            A one-step guide to Box-Model: The Basic building block of CSS.Blog to help
            beginners understand this important concept and apply in their styling.
        </p>
        <div class="button">
            <a class="link link-primary" target="_blank" href="https://palakbatra.hashnode.dev/css-box-model-for-a-5-year-old">Read Blog
            </a>
        </div>
    </section>
    <section class="section ow container container-center">
        <h1>Why do websites end with .com?</h1>
        <p>
            Tried answering why most of the websites we see on the internet end with .com.
        </p>
        <div class="button">
            <a class="link link-primary" target="_blank" href="https://palakbatra.hashnode.dev/why-do-websites-end-with-com">Read Blog
            </a>
        </div>
    </section>
   </>
  )
}

export default BlogBody