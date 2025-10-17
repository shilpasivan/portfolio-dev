import React from "react";
import "./Experiance.css";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Shastha Systems and Solutions, Thiruvananthapuram",
      duration: "Nov 2022 – Aug 2025",
      responsibilities: [
        "Designed Angular 17-based multi-catalog workflows, enhancing UI responsiveness by 30%.",
        "Engineered a multi-storefront platform with reusable catalog structures, boosting listings by 40%.",
        "Developed an automated pricing and inventory system, reducing stockouts by 20%.",
        "Led migration of legacy e-commerce data to new platform with zero data loss.",
        "Implemented vendor self-service dashboards using Angular and REST APIs.",
        "Built promoter management system with real-time performance tracking, increasing engagement by 25%.",
        "Introduced CI/CD pipelines, accelerating software releases by 30%.",
        "Collaborated with UX, QA, and backend teams to deliver scalable solutions.",
      ],
    },
    // Add more experiences here if needed
  ];

  return (
    <section className="experience-section">
      <div className="container">
        
        <h2 className="section-title">Professional Experience</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <div className="duration">{exp.duration}</div>
                <ul>
                    <br /><br />
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
               
                <br />
                <a href="https://shastha.in/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>Shastha Systems and Solutions</a>
              </div>
            </div>
          ))}
          
        </div>
          {/* <div style={{display:"flex",width:"100%"}}> <img src="https://www.shutterstock.com/image-vector/flat-style-thin-line-art-600nw-399376267.jpg" alt="" /></div> */}
      </div>
    </section>
  );
};

export default Experience;
