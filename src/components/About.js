import React, {Component} from 'react';
import '../styles/components/_about.scss'


class About extends Component {
      render() { 
          return ( 
            <div className="about">
                <div className="about-text">
                  <p className="about-skills"></p>
                  <p className="about-skills">
                  </p>
                  <p className="about-skills"></p>
                </div>
                <div className="skills-box-container"><div><p className="skills">Skills</p></div>
                  <div className="skills-box">
                    <div className="skills-box-icon"><img src={require('../styles/javascript-logo.png')} alt="icon" height="40" width="40"/></div>
                    <div className="skills-box-bar">
                      <div className="skills-box-status-100"></div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-box-icon"><img src={require('../styles/react-logo.png')} alt="icon" height="40" width="40"/></div>
                    <div className="skills-box-bar">
                      <div className="skills-box-status-75"></div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-box-icon"><img src={require('../styles/nodejs-logo.png')} alt="icon" height="40" width="40"/></div>
                    <div className="skills-box-bar">
                      <div className="skills-box-status-85"></div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-box-icon"><img src={require('../styles/sql-logo.png')} alt="icon" height="40" width="40"/></div>
                    <div className="skills-box-bar">
                      <div className="skills-box-status-75"></div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-box-icon"><img src={require('../styles/html5-logo.png')} alt="icon" height="40" width="40"/></div>
                    <div className="skills-box-bar">
                      <div className="skills-box-status-50"></div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-box-icon"><img src={require('../styles/css-logo.png')} alt="icon" height="40" width="40"/></div>
                    <div className="skills-box-bar">
                      <div className="skills-box-status-70"></div>
                    </div>
                  </div>
                  <div className="skills-box">
                    <div className="skills-box-icon"><img src={require('../styles/c-logo.png')} alt="icon" height="40" width="40"/></div>
                    <div className="skills-box-bar">
                      <div className="skills-box-status-60"></div>
                    </div>
                  </div>
                </div>
            </div>
          );
      }
  }
   
export default About;