import React, {Component} from 'react';
import '../styles/components/_projects.scss';

class Projects extends Component {
      render() { 
          return ( 
            <div>
              <div className="container">
                <div id="chat" className="projects">
                  <a className="links" href="https://mongochat-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" align="center">View</a>
                  <a className="links" href="https://mongochat-1.herokuapp.com/" target="_blank" rel="noopener noreferrer" align="center">Source</a>
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
