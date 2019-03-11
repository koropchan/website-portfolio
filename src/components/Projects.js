import React, {Component} from 'react';
import '../styles/components/_projects.scss';

class Projects extends Component {
      render() { 
          return ( 
              <div id="projects-container" className="projects-container">
                <div className="project-container">
                  <h1 className="h1">Realtime chat built with React, MongoDB database and Node.JS as a serever-side.</h1>
                  <div id="chat" className="projects">
                    <a className="links" href="https://realtime-chat-project.herokuapp.com/" target="_blank" rel="noopener noreferrer" align="center">View</a>
                    <a className="links" href="https://github.com/koropchan/realtime-chat" target="_blank" rel="noopener noreferrer" align="center">Github</a>
                  </div>
                </div>

                <div className="project-container">
                  <h1 className="h1">Shows charts with real time data from different API sources. Built in React.</h1>
                  <div id="charts" className="projects">
                    <a className="links" href="https://realtime-charts.herokuapp.com/" target="_blank" rel="noopener noreferrer" align="center">View</a>
                    <a className="links" href="https://github.com/koropchan/realtime-charts" target="_blank" rel="noopener noreferrer" align="center">Github</a>
                  </div>
                </div>

                <div className="project-container"></div>
                <div className="project-container"></div>
              </div>
           );
      }
  }
   
export default Projects;
