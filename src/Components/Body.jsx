import React from 'react';
import '../style/style.css';

const Body = () => {
  return (
    <>
    <section class="section container container-center about-me">
        <h1>About me : </h1>
        <p>
            I'm a 2021 B-Tech graduate, currently working in Fidelity International as <b>Sofware Engineer-2 </b> and an <b><a href="https://www.credly.com/badges/b259c09e-8575-44a0-a4a9-34e161522130?source=linked_in_profile">AWS certified cloud practitioner.</a></b>
            Driven by a strong passion for Web development and learning about cloud services, I am dedicated to honing my skills and creating exceptional
            user
            experiences. I'm familiar with React.JS, Express.JS, Node.JS, AWS (IAM, Cloudwatch), Django, HTML5, CSS3, and Git.
        </p>

    </section>

    <section class="section ow container container-center">

<h1>Projects</h1>
<div class="icon">
    Tech Stack :
    
    <img alt="React.JS" src="https://img.icons8.com/ios-glyphs/30/000000/react" />
    <img alt="HTML" src="https://img.icons8.com/ios-glyphs/30/000000/html-5.png" />
    <img alt="Android" src="https://img.icons8.com/ios/50/css.png" />
    <img alt="Android" src="https://img.icons8.com/ios-glyphs/30/000000/android-os.png" />
    <img alt="AWS" src="https://img.icons8.com/windows/32/000000/amazon-web-services.png" />
    
</div>
<p>
    Throughout my journey as a developer, I have had the opportunity to apply my skills and showcase my
    proficiency
    through a range of projects. These projects serve as a testament to my ability to leverage my capabilities.
</p>
<div id="buttons">
    <a class="link link-primary" href="/projects">See Projects
    </a>
</div>

</section>

<section class="section container container-center">
        <h1>Blogs</h1>
        <p>
            I am also working on some technical and non technical blogs. I like to document my journey of learning.
            Please do
            give them a read and share your valuable feedback with me.
        </p>
        <div class="buttons">
            <a class="link link-secondary" href="/blog">Read Blogs</a>
        </div>
    </section>
    </>
  )
}

export default Body