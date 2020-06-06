import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Portfolio.css";

class Projects extends React.Component {
  state = {
    project: [
      {
        id: 0,
        name: "Imperio",
        image: "https://bit.ly/3amXZpW",
        stack: "React, HTML, CSS, C#, SQL",
        project: "https://imperiotech.azurewebsites.net/",
        code: null,
        video: "",
      },
      {
        id: 1,
        name: "Task Tracker",
        image: "https://bit.ly/2KmRTeA",
        stack: "React, HTML, CSS",
        project: "https://cjara002.github.io/taskTracker/",
        code: "https://github.com/cjara002/taskTracker",
        GIFs: "https://media.giphy.com/media/mGcOrK9F3RO9CdfK6L/source.mp4",
        video:
          "https://www.youtube.com/watch?v=xRKpxHlh3uY&list=PLvzQZBo6Tz-uIF9SPoqN52B6I49r4w5eC",
      },
      {
        id: 2,
        name: "YumWise",
        image: "https://bit.ly/3bluZQy",
        stack: "HTML, CSS, JavaScript",
        project: "https://cjara002.github.io/JSQuiz/",
        code: "https://github.com/cjara002/JSQuiz",
        video: "",
      },
      {
        id: 3,
        name: "AirBnB.Unique",
        image: "https://bit.ly/2VOgVbG",
        stack: "React, HTML, CSS, C#, SQL",
        project: "https://cjara002.github.io/AirBnB.Unique/",
        code: "https://github.com/cjara002/AirBnB.Unique",
        video: "",
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* Projects */}
        <div
          className="myProjects"
          id="myProjects"
          style={{
            background: `${this.props.backgroundColor}`,
            color: `${this.props.fontColor}`,
          }}
        >
          <h1>Projects</h1>
          <div className="container">
            <div className="row">
              {this.state.project.map((project) => (
                <div className="col-6" key={project.id}>
                  <div className="card-default card" id="cardBottomBorder">
                    <div
                      className="text-center card-body"
                      style={{
                        background: `${this.props.backgroundColor}`,
                      }}
                    >
                      <h2>{project.name}</h2>
                      <span>Technology Used: {project.stack}</span>
                      <br />
                      <br />
                      <img
                        src={project.image}
                        alt="Contact"
                        id="profilePhoto"
                      />
                    </div>
                    <div
                      className="card-footer"
                      style={{
                        background: `${this.props.backgroundColor}`,
                      }}
                    >
                      <div
                        className="btn-group btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label
                          className="btn btn-secondary "
                          // href={project.project}
                        >
                          {/* <input type="radio" name="options" /> PROJECT */}
                          <a
                            // style={{ decoration: "none" }}
                            id="projectA"
                            type="radio"
                            name="options"
                            href={project.project}
                          >
                            PROJECT
                          </a>
                        </label>
                        <label className="btn btn-secondary ">
                          <a
                            // style={{ decoration: "none" }}
                            id="projectA"
                            type="radio"
                            name="options"
                            href={project.code}
                          >
                            {project.code === null ? "N/A" : "CODE "}
                          </a>
                        </label>
                        <label className="btn btn-secondary">
                          <a
                            // style={{ decoration: "none" }}
                            id="projectA"
                            type="radio"
                            name="options"
                            href={project.video}
                          >
                            YOUTUBE
                          </a>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
