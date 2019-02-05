import React, {Component} from 'react';
import '../styles/components/_projects.scss';

class Projects extends Component {
      render() { 
          return ( 
            <div>
              <div className="container">
                <div id="project-container">
                  <h1 className="h1">Realtime chat</h1>
                  <div id="chat" className="projects">
                  <a className="links" href="https://realtime-chat-project.herokuapp.com/" target="_blank" rel="noopener noreferrer" align="center">View</a>
                  <a className="links" href="https://github.com/koropchan/realtime-chat" target="_blank" rel="noopener noreferrer" align="center">Source</a>
                  </div>
                </div>
                  <div className="projects"></div>
                  <div className="projects"></div>
                  <div className="projects"></div>
              </div>
            </div>
           );
      }
  }
   
export default Projects;
