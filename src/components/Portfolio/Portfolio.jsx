import AboutMe from "../AboutMe/AboutMe";
import HeroBanner from "../HeroBanner/HeroBanner";
import TechUsed from "../TechUsed/TechUsed";
import React from "react";
import Projects from "../Projects/Projects";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

// const setDarkModeInApp = (props) => {
//   props.triggerDarkMode(props.this.state.darkMode);
// };

class Portfolio extends React.Component {
  state = {
    darkMode: false,
  };

  componentDidMount() {
    const ColorMode = JSON.parse(localStorage.getItem("darkMode"));
    if (ColorMode) {
      this.setDarkMode();
    } else {
      localStorage.setItem("darkMode", JSON.stringify(this.state.darkMode));
    }
  }

  slider = () => {
    // debugger;
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
    localStorage.setItem("darkMode", JSON.stringify(!this.state.darkMode));
    // this.setDarkModeInApp();
  };

  setDarkMode = () => {
    const ColorMode = JSON.parse(localStorage.getItem("darkMode"));
    this.setState(
      () => ({
        darkMode: ColorMode,
      })
      // ,
      // () => {
      //   setDarkModeInApp(this.state.darkMode);
      // }
    );
  };
  render() {
    return (
      <React.Fragment>
        {/* <div id="topHead"> */}

        {/* <div id="overlay"> */}
        <nav id="navOverEverything">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ul>
                  <li>CJ</li>

                  <label
                    htmlFor=""
                    className="switch"
                    onClick={this.slider}
                    data-toggle="tooltip"
                    title={
                      this.state.darkMode === true ? "Light Mode" : "Dark Mode"
                    }
                  >
                    {this.state.darkMode ? (
                      <input type="checkbox" checked />
                    ) : (
                      <input type="checkbox" />
                    )}
                    <span className="slider round"></span>
                  </label>
                </ul>
              </div>

              <div className="col-md-9">
                <ul className="navButton">
                  <li>
                    {" "}
                    <a href="#about" className="activeButton">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#techUsed">Technology</a>
                  </li>
                  <li>
                    <a href="#myProjects">Projects</a>
                  </li>
                  <li>
                    <a href="k">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <HeroBanner
          backgroundImage={
            this.state.darkMode === true
              ? "https://bit.ly/3exjLtv"
              : "https://bit.ly/2MeFTfS"
          }
          fontColor={this.state.darkMode === true ? "white" : "black"}
        />
        <AboutMe
          backgroundColor={this.state.darkMode === true ? "black" : "white"}
          fontColor={this.state.darkMode === true ? "white" : "black"}
        />
        <TechUsed
          backgroundImage={
            this.state.darkMode === true
              ? "https://bit.ly/2XfVthC"
              : "https://bit.ly/2yJf9Ba"
          }
          fontColor={this.state.darkMode === true ? "white" : "black"}
        />
        <Projects
          backgroundColor={this.state.darkMode === true ? "black" : "white"}
          fontColor={this.state.darkMode === true ? "white" : "black"}
        />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Portfolio;
