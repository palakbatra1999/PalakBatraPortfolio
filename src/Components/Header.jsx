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
           a 2021 B.Tech graduate and Software Engineer II at Fidelity International, with 4+ years of experience building scalable applications, backend services, and cloud-native solutions.
My expertise spans full-stack development, working with technologies like Java, Spring Boot, React.js, Node.js, and AWS. I've worked on microservices, Kubernetes migrations, CI/CD automation, and AI-powered workflow solutions, with a strong interest in building intelligent applications using emerging AI technologies.
I'm an AWS Certified Cloud Practitioner, passionate about continuous learning, solving real-world engineering problems, and building technology that makes a meaningful impact.
          </p>
         
        </div>
        <img alt="" class="img" src="/img/header_pic.svg" />
      </header>
    </>
  );
};

export default Header;
