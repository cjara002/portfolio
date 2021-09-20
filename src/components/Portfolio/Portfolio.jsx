import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactMe/ContactForm";
import HeroBanner from "../HeroBanner/HeroBanner";
// import TechUsed from "../TechUsed/TechUsed.jsx";
import React, { useState } from "react";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectWithTabs from "../Projects/Projects2/ProjectsWithTabs";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Project from "../Projects/listOfProject";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <nav id="navOverEverything">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ul>
                <li>
                  <a
                    href="https://github.com/cjara002"
                    data-toggle="tooltip"
                    title="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/carlos-j-jara"
                    data-toggle="tooltip"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                {/* <span className="fName text-muted">Carlos</span>
                    <span className="slashBar text-muted">/</span>
                    <span className="lName">Jara</span> */}
                {/* </li> */}
              </ul>
            </div>

            <div className="col-9">
              <ul className="navButton">
                <li>
                  {" "}
                  <a
                    href="https://www.carlosjaraportfolio.com/"
                    className="largeTextNav"
                  >
                    Home
                  </a>
                  <a
                    href="https://www.carlosjaraportfolio.com/"
                    className="smallTextNav"
                  >
                    <em
                      className="fa-1x mr-2 fas fa-home"
                      style={{ cursor: "pointer" }}
                      data-toggle="tooltip"
                      title="Home"
                    ></em>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#about" className="largeTextNav">
                    About
                  </a>
                  <a href="#about" className="smallTextNav">
                    <em
                      className="fa-1x mr-2 fas fa-laptop"
                      style={{ cursor: "pointer" }}
                      data-toggle="tooltip"
                      title="About Me"
                    ></em>
                  </a>
                </li>
                <li>
                  <a href="#myProjects" className="largeTextNav">
                    Recent Work
                  </a>
                  <a href="#myProjects" className="smallTextNav">
                    <em
                      className="fa-1x mr-2 fas fa-briefcase"
                      style={{ cursor: "pointer" }}
                      data-toggle="tooltip"
                      title="Recent Work"
                    ></em>
                  </a>
                </li>
                <li>
                  <a href="#formBorder" className="largeTextNav">
                    Contact
                  </a>
                  <a href="#formBorder" className="smallTextNav">
                    <em
                      className="fa-1x mr-2 fas fa-envelope-open-text"
                      style={{ cursor: "pointer" }}
                      data-toggle="tooltip"
                      title="Contact Me"
                    ></em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <HeroBanner />

      <AboutMe />

      <div
        className="myProjects"
        id="myProjects"
        style={{
          backgroundImage: `url(https://bit.ly/2yJf9Ba})`,
        }}
      >
        <div className="container">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Web Apps
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Mobile First Apps
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        {Project.map((project) => (
          <ProjectWithTabs
            project={project}
            activeTab={activeTab}
            key={project.id}
          />
        ))}
      </div>
      <ContactForm />
    </React.Fragment>
  );
};
// }

export default Portfolio;
