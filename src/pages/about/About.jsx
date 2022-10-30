import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AboutStyle, { AboutImg, AboutUs } from "./About.styled";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutStyle>
        <AboutImg
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/08/learn-coding-online-for-free.png"
          alt=""
        />
        <AboutUs>
          Hi There I'm Hakan Bilgi <br />
          Full Stack Developer <br />
          My experience are HTML5, CSS3, JavaScript, React.js, Redux,React
          Native, SASS, Bootstrap, Material.UI, Python, SQL, Git, GitHub, APIs,
          Agile, Jira, SDLC, OOP, RESTful APIs. and etc.
          <br />
          <br />
          <p>
            This Project Developed With <span> {"<Styled Components/>"}</span>
          </p>
        </AboutUs>
      </AboutStyle>
    </>
  );
};

export default About;
