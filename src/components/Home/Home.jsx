import React, { useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import ContactForm from "../ContactMe/ContactForm";
import HeroBanner2 from "../HeroBanner/HeroBanner2";
import projects from "../Projects/listOfProject";
import ProjectWithTabs from "../Projects/Projects2/ProjectsWithTabs";
import TechUsed from "../TechUsed/TechUsed";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { IMAGES } from "../../constants/Theme.js"

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const HeroBannerText = (
    <div className="col" id="heroBanner">
    <div id="heroValuesContainer">
      <h3 className="heroValues">Explore My Work</h3>
    </div>
    <h1> Crafting Code with Passion</h1>
  </div>
  )

  return (
    <>
      <HeroBanner2 image={IMAGES.desertLandscape} heroBannerText={HeroBannerText}/>

      <AboutMe />

      <TechUsed />

      <div
        className="myProjects"
        id="myProjects"
        style={{
          backgroundImage: `url(https://bit.ly/2yJf9Ba})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Nav tabs className="mb-5">
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                <p>Web</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                <p>Mobile-First</p>
              </NavLink>
            </NavItem>
          </Nav>
          {projects.map((project) => (
            <ProjectWithTabs
              project={project}
              activeTab={activeTab}
              key={project.id}
            />
          ))}
        </div>
      </div>

      <ContactForm />
    </>
  );
};

export default Home;
