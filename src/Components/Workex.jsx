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
  
  <div className="skill-tag">
  <div >Skills I have </div>
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
        <h3>Software Engineer-2</h3>
        <h4>Fidelity International</h4>
        <p class="duration">Jan 2024 - Present</p>
        <ul>
          <li>Developed a micro-frontend integrated with Fidelity’s website to display fund investment projections and enable
          CSV downloads using the MERN stack, AWS Lambda, API Gateway, and Terraform.</li>
          <li> Created core features such as export functionality, pagination, and seamless multi-platform integration.</li>
          <li>Optimized an API for DynamoDB by implementing parallel request handling, reducing response time from 4
          seconds to 1–2 seconds and enhancing user experience by 50%</li>
         
        </ul>
        <p class="tech">Technologies: React, Node.js, JavaScript, AWS, Git, Jenkins</p>
      </div>
    </div>

    
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content section ">
        <h3>Software Engineer-1</h3>
        <h4>Fidelity International</h4>
        <p class="duration">Oct 2022 - Dec 2023</p>
        <ul>
          <li>Contributed to a MERN stack-based micro frontend to digitize fund and account document delivery for Fidelity
          customers, streamlining document access.</li>
          <li> Owned and optimized critical features, including APIs for fetching categories and accounts, ensuring smooth UI
          display, and wrote comprehensive frontend unit tests to guarantee flawless functionality.</li>
          <li>Wrote all the unit test cases using Jest and achieved the 100% test coverage independently.</li>
        </ul>
        <p class="tech">Technologies: REact.JS, Node.JS Express.js, MongoDB, AWS, Docker, Git</p>
      </div>
    </div>

    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content section">
        <h3>Graduate Programmer Associate</h3>
        <h4>Fidelity International</h4>
        <p class="duration">Jul 2021 - Dec 2022</p>
        <ul>
            <li> Developed a multithreaded script to automate start/stop of 40 applications, reducing time from 1.5 hours to 5
            minutes.</li>
          <li> Developed a Python Django web app to detect discrepancies in Fidelity fund factsheets by comparing data from
          Fidelity’s and Morningstar’s APIs, automatically flagging inconsistencies using Morningstar’s data.</li>
          <li>Designed three intuitive screens presenting discrepancies in tabular, pie chart, and diagram formats, enhancing
          data visualization for business users and significantly reducing manual effort.</li>
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