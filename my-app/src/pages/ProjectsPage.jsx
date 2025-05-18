import React, { useState } from "react";
import "./styles/ProjectsPage.css";
import sup1 from "../assets/sup1.png";
import sup2 from "../assets/sup2.png";
import sup3 from "../assets/sup3.png";
import sus1 from "../assets/sus1.png";
import sus2 from "../assets/sus2.png";
import sus3 from "../assets/sus3.png";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";

const projects = [
    {
        id: 1,
        title: "The SUPER Assessor",
        description:
            "The SUPER Assessor is a full-stack web application designed to help educators create, manage, and evaluate assessment strategies through a card-based game experience. Inspired by the original physical card game developed by NTNU, this digital version enhances usability, collaboration, and accessibility. Built using the MERN stack—MongoDB, Express.js, React, and Node.js—the application supports both single-player and multiplayer modes, giving educators flexibility depending on their teaching environment. The application simulates a structured assessment design process by allowing users to draw and combine various types of cards, including task and evaluation cards. These cards represent pedagogical building blocks that teachers can use to craft custom assessment plans tailored to specific learning outcomes. The card interface was developed as interactive Web Components to ensure reusability and flexibility across the app. The platform features role-based authentication with secure JWT login for three distinct roles: visitor, teacher, and admin. Teachers can create profiles, build assessment forms, save progress, and export their plans as printable PDFs. Admins manage the card database and user base. Visitors can explore the interface in a limited capacity, giving them a preview of the tool’s functionality. Beyond individual work, SUPER Assessor supports real-time collaboration. In multiplayer mode, educators can join shared sessions and co-create assessment plans using a live-synced interface. This enhances the social and cooperative element of the original game. The project was developed as part of an interdisciplinary collaboration at NTNU, with emphasis on modular design, responsive UI, and practical deployment of full-stack concepts. The end result is a flexible, scalable platform that modernizes the assessment planning process for teachers through technology.",
        overview:
            "The app supports both single and multiplayer modes, integrates PDF generation, and includes role-based access, secure JWT login, and user profile handling.",
        technologies: "MongoDB, Express.js, React, Node.js, JWT, role-based access, PDF export.",
        myContributions:
            "I contributed to the development of a secure REST API using Express and MongoDB. This involved designing routes, defining schemas using Mongoose, and ensuring clean separation between controllers and business logic. I focused heavily on building scalable endpoints to support card management, multiplayer synchronization, and profile data. To improve maintainability and testing, I followed REST principles closely and introduced middleware for validation and error handling. On the frontend, I built several of the core card interaction components using React. This included logic for card drawing, flipping, saving to favorites, and interacting with multiplayer game states. I ensured state synchronization with the backend using Axios and made sure data flow was smooth across components, even during concurrent user sessions. The focus was always on modularity, reusability, and performance—particularly important given the number of components interacting with live game logic. This REST API foundation made it possible for our frontend to deliver a responsive, real-time experience for educators using the platform.",
        myContributions2:
            "I implemented authentication and user role logic using JWTs for secure login sessions. Each user is assigned a role—visitor, teacher, or admin—which controls their level of access throughout the application. Visitors can explore cards but cannot save or share; teachers can build, save, and export assessment plans; admins have full access to content and user management. To manage this, I developed protected routes on both frontend and backend, built role-checking middleware, and tied login sessions to token-based authentication stored in localStorage. I also added basic session timeouts and logout triggers for improved security. On the frontend, I created logic to tailor the UI based on login status. Logged-in users gain access to profile pages, saved drafts, and personalized data, all backed by MongoDB. I ensured that the user experience remained intuitive across all roles, and that no unauthorized access was possible through manual route changes or token tampering.",
        myContributions3:
            "A key part of my work involved building the PDF generation system. This feature allows users to export customized assessment plans—including both front and back sides of selected cards—in a print-friendly format. I developed the logic to transform card data and design elements into paginated PDF documents using html2pdf.js, ensuring consistent layout, spacing, and alignment with actual card dimensions. We wanted to preserve the look and feel of the physical card game while making it digital-first. The export function also includes metadata like titles, user names, and timestamps. I designed it to be responsive, so that cards would print cleanly from both desktop and tablet views. The system dynamically compiles only the selected cards, ensuring a clean and focused document. It was tested across different browsers and printers to make sure educators could depend on the quality of the output when using the app in real-world educational settings.",
        image: "https://cdn.sanity.io/images/9hf3wtbb/production/08d64520aee5dc1fd96627f12feb42733e7b4a6a-1068x719.png",
        imageCont: sup1,
        imageCont2: sup2,
        imageCont3: sup3,
        github: "https://github.com/ntnu-design/idg2100-2024-exam-team4",
        live: "",
        icon: "",
        listItem1: "Collaborative form building",
        listItem2: "Secure login (JWT)",
        listItem3: "Card-based UI",
        listItem4: "Multiplayer mode",
        listItem5: "PDF generation"
    }
    ,

    {
        id: 2,
        title: "Sustainability Diary",
        description: "Sustainability Diary is a full-stack MERN web application designed to promote eco-conscious habits among students and facilitate resource sharing for teachers. The platform enables students to document their sustainable actions through diary entries, earn achievements, and participate in virtual classrooms. Teachers can create and manage digital classrooms, distribute educational materials, and monitor student progress. The application incorporates features such as email-based password recovery, role-based access control, and responsive design to ensure a seamless user experience across devices. Additionally, it utilizes Docker for containerization and Swagger for comprehensive API documentation, streamlining development and deployment processes.",
        overview: "Students write diary entries, earn achievements, and join virtual classes. Teachers manage resources, monitor progress, and share content securely.",
        technologies: "MongoDB, Express.js, React, Node.js, Docker, Nodemailer, Swagger.",
        myContributions: "I implemented the email-based password recovery system using Nodemailer, allowing users to securely reset their passwords. This involved setting up token generation, expiration handling, and integrating the functionality into the user authentication flow. I also developed the classroom management logic, enabling teachers to create, update, and delete virtual classrooms, as well as manage student enrollments. This feature supports dynamic classroom interactions and enhances the collaborative learning environment.",
        myContributions2: "I designed and implemented the achievement system, which awards students for completing eco-friendly actions and maintaining consistent diary entries. This gamification element encourages user engagement and promotes sustainable habits. The system tracks user activities, calculates achievement criteria, and updates user profiles accordingly, providing real-time feedback and motivation.",
        myContributions3: "I contributed to the frontend development by conducting thorough testing and refining the responsive UI to ensure compatibility across various devices and screen sizes. This involved optimizing CSS styles, enhancing component layouts, and improving user interactions. Additionally, I assisted in creating comprehensive API documentation using Swagger, detailing endpoint structures, request/response formats, and authentication requirements to facilitate seamless backend integration.",
        image: "https://cdn.sanity.io/images/9hf3wtbb/production/181a01ada273c78cb19a3b3f6db4dc02985cbe6a-1919x913.png",
        imageCont: sus1,
        imageCont2: sus2,
        imageCont3: sus3,

        github: "https://github.com/Hannah-Sofie/webproject",
        live: "https://team3.sustainability.it.ntnu.no/",
        icon: "",
        listItem1: "Achievement system",
        listItem2: "Docker + Swagger",
        listItem3: "Password reset (email)",
        listItem4: "Classroom logic",
        listItem5: "Clean responsive UI"
    }
    ,
    {
        id: 3,
        title: "Portfolio Website",
        description: "The Portfolio Website is a full-stack MERN application built to showcase my personal development projects and skills in one cohesive platform. It acts as both a professional presence and a technical demonstration of my frontend and backend capabilities. The application was fully designed in Figma, with a strong emphasis on UX design principles, layout consistency, and visual hierarchy. The frontend is developed in React and styled using Tailwind CSS, delivering a modular, responsive, and interactive user interface. Animations and transitions are implemented using Framer Motion to subtly enhance the user experience without overwhelming the core content. Users can browse a structured list of projects, view detailed descriptions, explore technologies used, and access direct links to GitHub repositories or deployed applications. The backend, built with Node.js and Express, connects to MongoDB for managing dynamic project data, form submissions, and optional user accounts. I implemented a secure authentication system using JWT and bcrypt, allowing for login-based access to an admin dashboard where I plan to support future CMS-like functionality. Contact forms are validated and sanitized both client-side and server-side to prevent abuse and ensure reliability. Deployment is managed via Railway, with automatic CI/CD pipelines configured to build and deploy on every commit. HTTPS and a custom domain are included, making the app production-ready and accessible. Lighthouse and Core Web Vitals audits were performed to improve load performance, accessibility, and SEO-friendliness. The entire project is designed to scale—whether by adding more interactive elements, integrating GitHub’s API, or expanding into blog/content management in the future. This portfolio represents not just a finished product, but a space where I continually apply the latest practices in full-stack web development to refine and push my technical boundaries.",
        overview: "Responsive, creative, and functional—this site highlights my frontend/backend work with links to GitHub, live projects, and design thinking.",
        technologies: "MongoDB, Express.js, React, Node.js, Figma, Railway, GitHub.",
        myContributions: "I started the project by designing wireframes and full UI mockups in Figma. The goal was to maintain a minimal but expressive design language—using clean typography, whitespace, and color hierarchy to guide the user. Once the design was finalized, I recreated it pixel-perfect in code using React and Tailwind CSS. I structured the frontend to be modular, with project cards, dropdowns, and navigation built as reusable components. Accessibility was a key focus; I ensured proper tab navigation, contrast, and responsive design so the site would work on all screen sizes. I also implemented scroll animations using Framer Motion to add a dynamic feel without overcomplicating the interface. The site layout follows a consistent grid, making content flow logically from section to section.",
        myContributions2: "The backend is built in Node.js with Express and connects to a MongoDB database to store portfolio data such as project entries, contact messages, and optionally registered users. I implemented a simple user authentication system with hashed passwords and JWTs to enable login-protected areas such as a future admin dashboard. The contact form sends messages securely to the backend via POST requests. Each route is protected against invalid input and potential injection, using middleware for input validation and sanitation. I also implemented pagination and filtering logic in the backend to handle large sets of projects and support dynamic frontend rendering as the site scales.",
        myContributions3: "For deployment, I used Railway to handle both backend and frontend pipelines, taking advantage of its ability to automatically deploy from GitHub commits. The build and deploy process is streamlined for continuous integration, ensuring that updates push live immediately after code is merged. The domain is connected with HTTPS and performance-optimized for fast loading. I also used tools like Lighthouse and web.dev to audit accessibility and speed, making several adjustments to improve Core Web Vitals scores. This makes the site reliable not only for users but also for SEO and potential employers browsing it. Additionally, I integrated GitHub's API to pull dynamic stats or repository previews, helping automate parts of the content pipeline.",
        image: "https://cdn.sanity.io/images/9hf3wtbb/production/32ba11bc948b44a00e8581e60c67dad0224bc0f6-1739x945.png",
        imageCont: port1,
        imageCont2: port2,
        imageCont3: port3,
        github: "https://github.com/Jonhels/HelgeHub",
        live: "https://skjaerstein.com",
        icon: "",
        listItem1: "MERN stack portfolio",
        listItem2: "Figma to code",
        listItem3: "User login/signup",
        listItem4: "Railway deployment",
        listItem5: "Responsive design"
    }


];

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    return (
        <div className="project-container">
            <h1 className="project-heading">Projects</h1>

            <div className="project-images-wrapper">
                {projects.map((project) => (
                    <img
                        key={project.id}
                        className="project-image"
                        src={project.image}
                        alt={project.title}
                        onClick={() => setSelectedProject(project)}
                        style={{
                            cursor: "pointer",
                            border:
                                selectedProject.id === project.id ? "2px solid gray" : "none",
                        }}
                    />
                ))}
            </div>

            <div className="project-description">
                <div className="project-description-content">
                    <div className="project-description-text">
                        <h2 className="project-title">{selectedProject.title}</h2>
                        <h3>Overview</h3>
                        <p>{selectedProject.description}</p>
                        <p>{selectedProject.overview}</p>
                    </div>

                    <div className="project-description-text">
                        <h3>Technologies and Features</h3>
                        <img
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="project-description-image"
                        />
                        <p>{selectedProject.technologies}</p>
                        <ul>
                            <li>{selectedProject.listItem1}</li>
                            <li>{selectedProject.listItem2}</li>
                            <li>{selectedProject.listItem3}</li>
                            <li>{selectedProject.listItem4}</li>
                            <li>{selectedProject.listItem5}</li>
                        </ul>
                    </div>

                    <div className="project-description-text">
                        <h3>My Role and Contributions</h3>
                        <img
                            src={selectedProject.imageCont}
                            alt={selectedProject.title}
                            className="project-description-image"
                        />
                        <p>{selectedProject.myContributions}</p>
                        <img
                            src={selectedProject.imageCont2}
                            alt={selectedProject.title}
                            className="project-description-image"
                        />
                        <p>{selectedProject.myContributions2}</p>
                        <img
                            src={selectedProject.imageCont3}
                            alt={selectedProject.title}
                            className="project-description-image"
                        />
                        <p>{selectedProject.myContributions3}</p>
                    </div>
                </div>

                <div className="project-description-links">
                    <ul>
                        {selectedProject.github && (
                            <li>
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Project on GitHub
                                </a>
                            </li>
                        )}
                        {selectedProject.live && (
                            <li>
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Live Project
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
