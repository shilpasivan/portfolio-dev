import React from "react";
import "./Project.css";

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Catalog & Inventory Platform",
            description: `
      Designed and developed a dynamic multi-catalog management system using Angular 17.
      Built reusable UI components, advanced filtering, and pagination features for seamless
      browsing. Integrated RESTful APIs to display live pricing and stock availability.
      Improved UI performance by 30% through lazy loading and optimized change detection.`,
            tech: [
            ],
<<<<<<< HEAD
            image: "/assets/project-img1.jpg",
=======
            image: "/portfolio-dev/assets/project-img1.jpg",
>>>>>>> 9154f23b4c897f619cb7828ee9beb56f2054df44
        },
        {
            title: "Smart Pricing Automation Dashboard",
            description: `
      Created an Angular-based admin dashboard to monitor and automate product pricing.
      Implemented reactive forms, data visualization with charts, and role-based access control.
      Integrated CI/CD for deployment and enhanced UI accessibility for all screen sizes.`,
            tech: [
            ],
<<<<<<< HEAD
            image: "/assets/project-pricing.jpg",
=======
            image: "/portfolio-dev/assets/project-pricing.jpg",
>>>>>>> 9154f23b4c897f619cb7828ee9beb56f2054df44
        },
        {
            title: "E-Commerce Data Migrator (UI Tool)",
            description: `
      Developed a user-friendly Angular interface for migrating legacy e-commerce data
      to the latest catalog system. Built step-by-step migration workflows with progress tracking
      and validation. Used Angular Material and custom animations for a polished experience.`,
            tech: [
            ],
<<<<<<< HEAD
            image: "/assets/project-migrator.jpg",
=======
            image: "/portfolio-dev/assets/project-migrator.jpg",
>>>>>>> 9154f23b4c897f619cb7828ee9beb56f2054df44
        },
        {
            title: "Domain Manager",
            description: "The Domain Manager is an internal web application developed to streamline the configuration, monitoring, and management of product domains within an organization. Built using Angular 17, it provides a centralized interface where administrators can create, update, and manage domain mappings, track their live status, and ensure synchronization across multiple environments (development, staging, and production)."
            , tech: [
            ],
<<<<<<< HEAD
            image: "/assets/project-domain.jpg",
=======
            image: "/portfolio-dev/assets/project-domain.jpg",
>>>>>>> 9154f23b4c897f619cb7828ee9beb56f2054df44
        },
        {
            title: "E-commerce Order Flow Management Admin Panel",
            description: "The E-commerce Order Flow Management Admin Panel is a comprehensive dashboard built using Angular 17 to manage and streamline end-to-end order operations.  The system integrates seamlessly with backend APIs to deliver real-time order insights, automate workflow transitions, and ensure smooth coordination between sellers, warehouses, and delivery partners. With its modular UI, analytics-driven reporting, and secure access control, it enhances operational efficiency and reduces order processing time.",
            tech: [
            ],
<<<<<<< HEAD
            image: "/assets/project-orderflow.jpg",
=======
            image: "/portfolio-dev/assets/project-orderflow.jpg",
>>>>>>> 9154f23b4c897f619cb7828ee9beb56f2054df44
        },
        {
            title: "Seller & Marketplace Management System",
            description: "The Seller & Marketplace Management System is a powerful admin platform designed to oversee and streamline seller operations within an e-commerce ecosystem. Built with Angular 17, it enables administrators to manage seller onboarding, product listings, pricing, commission rules, and performance analytics—all from a unified dashboard. The system ensures transparency and consistency by synchronizing seller data, automating approval workflows, and maintaining marketplace integrity. Its modular interface supports role-based access, advanced filtering, and performance insights to enhance decision-making and operational efficiency.",
            tech: [
            ],
<<<<<<< HEAD
            image: "/assets/project-seller.jpg",
=======
            image: "/portfolio-dev/assets/project-seller.jpg",
>>>>>>> 9154f23b4c897f619cb7828ee9beb56f2054df44
        }


    ];

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Frontend Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                {/* <img src={project.image} alt={project.title} /> */}
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-item">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
