// MyComponent.jsx
import React, { useRef } from "react";
import CarouselExample from '../components/CarousalExample';
import './Home.css';
import About from "./About";
import Experiance from "./Experiance";
import Projects from './Project';
import Contact from "./Contact";
import Header from "../components/header/Header";
function Home() {
    const aboutRef = useRef(null);
    const expRef = useRef(null);
    const projRef = useRef(null);
    const contactRef = useRef(null);
    const homeRef = useRef(null);

    const scrollToSection = (elementRef) => {
        elementRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div  ref={homeRef}>
             <Header
                scrollToHome={() => scrollToSection(homeRef)}
                scrollToAbout={() => scrollToSection(aboutRef)}
                scrollToExperience={() => scrollToSection(expRef)}
                scrollToProjects={() => scrollToSection(projRef)}
                scrollToContact={() => scrollToSection(contactRef)}
            />
            <div className='mainClass'>
                <div className='block-two' >
                </div>
                <div className='block-one'>
                    <h1 >Hi,I m Shilpa Sivan</h1>
                    <br />
                    <h3>Software Engineer & Web Developer</h3>
                    <br />
                    <div className='blog-text'><b>Welcome to my portfolio.</b> I am a Software Engineer and Web Developer who specializes in creating innovative, responsive web applications that transform digital concepts into reality.</div>
                    <br /><br />
                    <div className='blog-text'>With a strong foundation in modern web technologies and a passion for problem-solving, I focus on building scalable, user-centric solutions. From crafting intuitive front-end interfaces to developing robust back-end systems, I strive to deliver products that blend performance with elegance.</div>
                </div>
            </div>
            <section id="about" ref={aboutRef}>
                <About />
            </section>
              <section class="blog-section">
                <div class="blog-container">
                    <h1 class="blog-title">The Art of Web Development — Building the Digital Future</h1>

                    <p class="blog-text">
                        In today’s digital era, web development has evolved beyond just creating websites — it’s about crafting meaningful online experiences.
                        From responsive layouts that adapt to every screen size to seamless user interactions powered by JavaScript frameworks like
                        <span class="highlight">React</span>, <span class="highlight">Angular</span>, and <span class="highlight">Vue</span>, web development combines creativity with logic.
                    </p>

                    <p class="blog-text">
                        Modern developers don’t just write code — they solve problems, design smooth user journeys, and optimize performance for speed and accessibility.
                        The web is a living, breathing ecosystem that continuously evolves with new technologies like <span class="highlight">Progressive Web Apps</span>,
                        <span class="highlight">serverless computing</span>, and <span class="highlight">cloud-based deployment</span>.
                    </p>

                    <p class="blog-text">
                        Whether it’s a simple landing page or a complex web application, web development gives us the power to turn ideas into interactive realities —
                        shaping how the world connects, learns, and grows online.
                    </p>
                </div>
                   <br />   <br /><br /><br />
            </section>

            <section id="experience" ref={expRef}>
                <Experiance />
            </section>

            <section id="projects" ref={projRef}>
                <Projects />
            </section>
            
            <CarouselExample />
            <section id="contact" ref={contactRef}>
                <Contact />
            </section>
        </div>
    );
}

export default Home;