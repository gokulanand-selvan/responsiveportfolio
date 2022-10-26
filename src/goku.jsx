import React from "react";
import "./style.css";
import Webimage from "./Webimage";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";

function Main() {
  return (
    <div className="conatiner">
      <div className="hero">
        <header id="navbar">
          <nav>
            <h2 className="logo">Portfolio</h2>
            <ul>
              <li>
                <a href="url">Home</a>
              </li>
              <li>
                <a href="url">About</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/16gzZeUom3NP4of_G0w2WvCsjGhSEt9ZC/view?usp=drivesdk" >
                  Resume
                </a>
              </li>
              <li>
                <a href="https://nimble-otter-967a6a.netlify.app/">Portfolio</a>
              </li>
              <li>
                <a href="https://hacksyouwant.blogspot.com/">Blog</a>
              </li>
              {/* <li>
                  <a href="url">Contact</a>
                </li> */}
              <li>
                <a
                  href="https://drive.google.com/file/d/16gzZeUom3NP4of_G0w2WvCsjGhSEt9ZC/view?usp=drivesdk"
                  className="btn"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="bg">
          <Webimage />
        </div>
        <div className="content">
          <h1 id="gokulanand">
            Gokul
            <br />
            Anand
          </h1>
          <h3>Front-end web developer</h3>
          <p>
            I am a front-end web developer. I'am a newbie to this feild with{" "}
            <br />
            lots of exitement and intrestand also I can provide clean code and
            pixel
            <br />
            perfect design. I also make the website more and more intractive
            <br />
            with web animations.
          </p>
          <a href="https://www.linkedin.com/in/gokul-anand-selvan-657b58199">
            <button type="button">Hire Me</button>
          </a>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/gokul-anand-selvan-657b58199">
                <FaLinkedinIn style={{ color: "white" }} />
              </a>
            </li>
            <br />
            <li>
              <a href="https://github.com/gokulanand-selvan" id="github">
                <GoMarkGithub style={{ color: "white" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Main;
