import React from "react";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";
import ProjectDetails from "../Projects/Projects2/ProjectDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import images from "../Helper/Images.js";
import SuccessScreen from "../ContactMe/success"

const Portfolio = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProjectDetails />} />
          <Route path="/sucess" element={<SuccessScreen />} />
        </Routes>
        <footer className="bg-dark">
          <div className="py-4 border-top border-color-light-white">
            <div className="container">
              <div className="text-center">
                <p className="mb-0 text-white opacity9">&copy; 2024- CJJ</p>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </>
  );
};

export default Portfolio;
