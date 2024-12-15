import {React, useEffect, useState} from 'react'
import Footer from './Footer';
import '../style/style.css';
import Navigation from './Navigation';



const Workex = () => {

    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    // useEffect(() => {
    //     AOS.init({ duration: 1000 }); // Initialize AOS for scroll animations
    //   }, []);
  return (
  <>
  <Navigation/>
 
  <section id="work-experience" class="work-experience"> 
  <div>Skills I have </div>
  <div>
  <div className="tech-chips">
  <span className="chip">React.js</span>
  <span className="chip">Node.js</span>
  <span className="chip">AWS Lambda</span>
  <span className="chip">Terraform</span>
  <span className="chip">Jest</span>
</div>
  </div>

  <div>

  <div className="download-resume">
      <a
        href="/PalakBatraResume.pdf" // Path to your resume file in the public folder
        download="PalakBatraResume.pdf" // Suggested filename
        className="resume-button"
      >
        Download Resume
      </a>
    </div>

  </div>
  <div  className={`timeline ${scrolling ? "scrolled" : ""}`} >
    
    <div class="timeline-item ">
      <div class="timeline-dot"></div>
      <div class="timeline-content section ">
        <h3>software Developer-2</h3>
        <h4>Fidelity International</h4>
        <p class="duration">Jan 2023 - Present</p>
        <ul>
          <li>Developed micro frontends using React and Node.js.</li>
          <li>Integrated backend APIs to create seamless user experiences.</li>
          <li>Optimized UI performance for faster load times.</li>
          <li>Collaborated with cross-functional teams to deliver features on time.</li>
        </ul>
        <p class="tech">Technologies: React, Node.js, JavaScript, AWS, Git, Jenkins</p>
      </div>
    </div>

    
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content section ">
        <h3>Software Engineer-1</h3>
        <h4>Fidelity International</h4>
        <p class="duration">Jul 2021 - Dec 2022</p>
        <ul>
          <li>Built and maintained RESTful APIs with Express.js and MongoDB.</li>
          <li>Developed serverless solutions using AWS Lambda and API Gateway.</li>
          <li>Ensured high availability and security of applications.</li>
          <li>Utilized Docker for containerization and deployment.</li>
        </ul>
        <p class="tech">Technologies: Express.js, MongoDB, AWS, Docker, Git</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content section">
        <h3>Graduate Programmer associate</h3>
        <h4>Fidelity International</h4>
        <p class="duration">Jul 2021 - Dec 2022</p>
        <ul>
          <li>Built and maintained RESTful APIs with Express.js and MongoDB.</li>
          <li>Developed serverless solutions using AWS Lambda and API Gateway.</li>
          <li>Ensured high availability and security of applications.</li>
          <li>Utilized Docker for containerization and deployment.</li>
        </ul>
        <p class="tech">Technologies: Express.js, MongoDB, AWS, Docker, Git</p>
      </div>
    </div>
  </div>
</section>

  <Footer/>
  </>
  )
}

export default Workex