import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  // Add this import for Bootstrap Icons

import {
  FaPython, FaJava, FaJsSquare, FaHtml5, FaCss3Alt,
  FaBootstrap, FaReact, FaNodeJs, FaGit, FaAws
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiPostgresql, SiExpress, SiAzure
} from "react-icons/si";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // Track selected project

  const [selectedEducation, setSelectedEducation] = useState(null);

  const [text, setText] = useState("");
  const fullText = `  Hi! I'm Sameeth Kumar Goud Talla, a passionate Software Developer with a solid foundation in cloud computing and UI/UX design. My expertise spans React, Node.js, MySQL, MongoDB, and designing seamless, intuitive user experiences. I’m driven by the challenge of solving complex problems and delivering innovative solutions that enhance user engagement. Feel free to explore my projects, and let’s connect on LinkedIn or GitHub.`;



  const techStack = [
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "AWS", icon: <FaAws size={40} /> },
    { name: "Git", icon: <FaGit size={40} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(prev => prev + fullText[index]);
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50); // Typing speed, in milliseconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900 font-sans"}>
        <div className="container py-5 px-4">
          <div className="row g-5">
            {/* Sidebar */}
            <aside className="col-md-4 col-lg-3 bg-white p-4 rounded-3 shadow-lg">
              <div className="text-center">
                <img src="/projects/logo.png" alt="Sameeth Kumar" className="mx-auto rounded-circle shadow mb-3" style={{ width: '124px', height: '124px' }} />
                <h1 className="fs-3 fw-bold text-Segoe Print-600">Hello I'm Sameeth Kumar Goud Talla</h1>
                <p className="fs-6 text-gray-600">Software Developer</p>
                <p className="fs-7 text-gray-500">Cloud & UI/UX Enthusiast</p>
              </div>
              <div className="mt-5 text-center">
                <a href="https://github.com/sameethkumar" className="d-block text-primary">GitHub</a>
                <a href="https://linkedin.com/in/sameethkumar" className="d-block text-primary">LinkedIn</a>
                <a href="mailto:talla.sa@northeastern.edu" className="d-block text-primary">Email</a>
                <a href="/Sameeth_Resume.pdf" download className="d-block text-primary">Download Resume</a>
              </div>

              {/* Available to Work Section */}
              <div className="mt-5 text-center">
  <div className="d-flex justify-content-center align-items-topcenter">
    <span className="dot" style={{
      width: "10px", 
      height: "10px", 
      borderRadius: "50%", 
      backgroundColor: "green", 
      animation: "blinking 1.5s infinite"
    }}></span>
    <p className="ms-2" style={{ lineHeight: "normal" }}>Available for work</p>
  </div>
  <div className="d-flex justify-content-center align-items-topcenter">
    <i className="bi bi-geo-alt me-2" style={{ fontSize: "16px" }}></i>
    <p className="ms-2" style={{ lineHeight: "normal" }}>Berlin, Germany</p>
  </div>
</div>



            </aside>

            {/* Main Content */}
            <main className="col-md-8 col-lg-9">
              {/* About */}
              <motion.section id="about" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="mb-5">
                <h2 className="fs-1 fw-semibold mb-4 text-indigo-600">About Me</h2>
                <div className="row">
                  <div className="col-md-4">
                    <img src="/projects/Profile_picture.jpg" alt="Sameeth Kumar" className="p-1 rounded-3 shadow-lg" style={{ width: '250px', height: '350px' }}  />
                  </div>
                  <div className="col-md-8">
                    <p className="fs-4">{text}</p>
                    <p>
                      <strong>Feel free to explore my projects</strong>, and let’s connect on{' '}
                      <a href="https://linkedin.com/in/sameethkumar" target="_blank" className="text-indigo-600">LinkedIn</a>{' '}
                      or{' '}
                      <a href="https://github.com/sameethkumar" target="_blank" className="text-indigo-600">GitHub</a>.
                    </p>
                  </div>
                </div>
              </motion.section>




              {/* Tech Stack Scroll */}
              <motion.section id="tech-stack" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-5">
                <div className="overflow-hidden" style={{ whiteSpace: "nowrap", width: "100%" }}>
                  <motion.div
                    className="d-inline-flex align-items-center gap-5"
                    style={{ display: "inline-flex" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                  >
                    {[...techStack, ...techStack].map((tech, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="bg-light p-3 rounded shadow-sm d-flex justify-content-center align-items-center"
                          style={{ width: 80, height: 80 }}
                        >
                          {tech.icon}
                        </div>
                        <span className="mt-2 text-dark small d-block">{tech.name}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.section>

              {/* Skills */}
              <motion.section id="skills" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <h2 className="fs-2 fw-semibold mb-4 text-indigo-600">Skills</h2>
                <div className="d-flex flex-wrap gap-3">
                  {["Python", "Java", "JavaScript", "SQL", "HTML", "CSS", "Bootstrap", "React", "Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Azure", "AWS", "Git"].map(skill => (
                    <span key={skill} className="badge bg-light text-dark border border-secondary rounded-pill px-3 py-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.section>

              {/* Experience */}
              <motion.section id="experience" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <h2 className="fs-2 fw-semibold mb-4 text-indigo-600">Experience</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {[{
                    company: "NetrichIT",
                    role: "Python Full-stack (Internship)",
                    period: "Dec 2022 - Jun 2023",
                    desc: "Brief description of your job responsibilities and achievements."
                  }].map((exp, index) => (
                    <div key={index} className="col">
                      <div className="card shadow-sm rounded-3 h-100">
                        <div className="card-body">
                          <h5 className="card-title text-indigo-600">{exp.company}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{exp.role}</h6>
                          <p className="text-sm text-muted">{exp.period}</p>
                          <p className="card-text">{exp.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Projects */}
              <motion.section id="projects" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <h2 className="fs-2 fw-semibold mb-4 text-indigo-600">Projects</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  {[{
                    title: "Ice Cream Ordering Website",
                    img: "/projects/ice-cream-project.webp",
                    desc: "User/admin roles, secure auth, CRUD, Flask + Bootstrap"
                  }, {
                    title: "Amazon UI/UX Redesign",
                    img: "/projects/amazon-redesign.jpg",
                    desc: "Figma prototype focused on UX"
                  }, {
                    title: "Student Information System",
                    img: "/projects/student-system.jpg",
                    desc: "Java/MySQL secure registration"
                  }].map((proj, index) => (
                    <div key={index} className="col">
                      <div className="card shadow-sm rounded-3 h-100">
                        <img src={proj.img} alt={proj.title} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} />
                        <div className="card-body">
                          <h5 className="card-title text-indigo-600">{proj.title}</h5>
                          <button 
                            className="btn btn-outline-primary w-100"
                            onClick={() => setSelectedProject(selectedProject === index ? null : index)} // Toggle project details
                          >
                            {selectedProject === index ? 'Hide Details' : 'Show Details'}
                          </button>
                          {selectedProject === index && (
                            <div className="mt-3">
                              <p>{proj.desc}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Education */}
              <motion.section id="education" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <h2 className="fs-2 fw-semibold mb-4 text-indigo-600">Education</h2>
                <div className="row row-cols-1 row-cols-md-1 g-4 wi">

                {[{
                  logo: "/projects/northeastern.png", // Updated path to .png
                  name: "Northeastern University",
                  degree: "Masters in Information Systems",
                  period: "Sep 23 - May 25",
                  description: "A top-tier university with a focus on Information Systems and cutting-edge technology research."
                }, {
                  logo: "/projects/mrit.png", // Updated path to .png
                  name: "Malla Reddy Institute of Technology",
                  degree: "Bachelors in Technology",
                  period: "Jul 19 - Aug 22",
                  description: "A renowned institute offering high-quality education in the field of technology."
                }, {
                  logo: "/projects/citd.png", // Updated path to .png
                  name: "Central Institute of Tools Design MSME",
                  degree: "Diploma in ECE",
                  period: "Jul 16 - Jun 19",
                  description: "A prestigious institution offering a comprehensive education in Electronics and Communication Engineering."
                }].map((edu, index) => (
                  <div key={index} className="d-flex align-items-center gap-4 bg-light p-3 rounded-3 shadow-sm mb-4">
                    <img src={edu.logo} alt={edu.name} className="w-10 h-10 rounded-circle" style={{ width: '104px', height: '104px' }} />
                    <div className="d-flex flex-column">
                      <h5 className="fs-5 fw-semibold">{edu.name}</h5>
                      <p className="fs-6 text-secondary">{edu.degree}</p>
                      <p className="fs-7 text-muted">{edu.period}</p>
                      <div
                        className="d-flex justify-content-between align-items-center"
                        onClick={() => setSelectedEducation(selectedEducation === index ? null : index)} // Toggle education details
                      >
                        <span>{selectedEducation === index ? 'Hide Details' : 'Show Details' }</span>
                        <i 
                          className={`bi ${selectedEducation === index ? 'bi-chevron-up' : 'bi-chevron-down'} fs-4`} 
                          style={{ cursor: 'pointer' }}
                        ></i>
                      </div>
                      {selectedEducation === index && (
                        <div className="mt-3">
                          <p>{edu.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                </div>
              </motion.section>




              {/* Contact Section */}
              <motion.section id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <h2 className="fs-2 fw-semibold mb-4 text-indigo-600">Contact Me</h2>
                <form className="row g-3">
                  <div className="col-12">
                    <input type="text" placeholder="Your Name" className="form-control" required />
                  </div>
                  <div className="col-12">
                    <input type="email" placeholder="Your Email" className="form-control" required />
                  </div>
                  <div className="col-12">
                    <textarea placeholder="Your Message" rows="4" className="form-control" required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                  </div>
                </form>
              </motion.section>
            </main>
          </div>

          {showScrollTop && (
            <button onClick={scrollToTop} className="btn btn-primary rounded-circle position-fixed bottom-5 end-5">
              ↑
            </button>
          )}

          <footer className="text-center mt-5 text-secondary">
            © 2025 Sameeth Kumar Goud Talla. All rights reserved.
          </footer>
        </div>
      </div>
    </motion.div>
  );
}
