import React, {Component} from 'react';
import '../styles/components/_projects.scss';

class Projects extends Component {
      render() { 
          return ( 
            <div>
              <div className="container">
                <div id="chat" className="projects">
                  <div class="button_div" align="center"><a class="button" href="https://mongochat-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">View</a></div>
                  <div class="button_div" align="center"><a class="button" href="https://mongochat-1.herokuapp.com/" target="_blank" rel="noopener noreferrer">Source</a></div>
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

