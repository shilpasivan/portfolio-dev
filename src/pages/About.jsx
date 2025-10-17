import React from "react";
import "./About.css";
import profileImg from "../assets/profile.png"; // adjust relative path

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                {/* Left Column: Image */}
                {/* <div className="about-image">
          <img src={profileImg} alt="Shilpa Sivan" />
        </div> */}

                {/* Right Column: Details */}
                <div className="about-details">
                    {/* <h2>Hello, I'm <span>Shilpa Sivan</span></h2> */}
                    <h4>Software Engineer & Web Developer</h4>
                    <p>
                        I specialize in designing and developing responsive, interactive, and scalable web applications using modern technologies such as Angular, TypeScript, JavaScript, HTML5, and CSS3. My focus is on creating seamless user experiences by implementing intuitive interfaces, optimizing performance, and ensuring accessibility across all devices. I strive to write clean, maintainable, and modular code that is easy to scale and collaborate on in team environments. Beyond development, I enjoy problem-solving, debugging complex issues, and integrating APIs to build robust, data-driven applications. My goal is to transform ideas into efficient and visually appealing digital products that deliver real value to users and businesses alike.          </p>

                    <div className="about-info">
                        <div>
                            <h5>Email</h5>
                            <p><a href="mailto:shilpasivan2000@gmail.com">shilpasivan2000@gmail.com</a></p>
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <p>+91 92074 12390</p>
                        </div>
                        <div>
                            <h5>LinkedIn</h5>
                            <p><a href="https://linkedin.com/in/shilpa-sivan-25a059219" target="_blank" rel="noopener noreferrer">linkedin.com/in/shilpa-sivan</a></p>
                        </div>
                    </div>

                    <div className="skills">
                        <h5>Core Skills:</h5>
                        <ul>
                            <li>Angular 17 & TypeScript</li>
                            <li>JavaScript, HTML5, SCSS, Bootstrap</li>
                            <li>RESTful APIs & CI/CD</li>
                            <li>Chrome DevTools, Postman, Git</li>
                        </ul>
                    </div>
                    <br />
                    <div className="skills">
                        <h5>Soft Skills:</h5>
                        <ul>
                            <li>Analytical Thinking & Problem-Solving</li>
                            <li>Collaboration & Communication</li>
                            <li>Initiative & Ownership</li>
                            <li>Adaptability & Continuous Learning</li>
                        </ul>
                    </div>
                    <br />
                    <div className="skills">
                        <h5>Communication</h5>
                        <ul>
                            <li>English</li>
                            <li>Malayalam</li>
                            <li>Hindi</li>
                            <li>Tamil</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
