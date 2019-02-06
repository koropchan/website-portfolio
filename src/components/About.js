import React, {Component} from 'react';
import '../styles/components/_about.scss'

const API = 'https://api.github.com/users/koropchan';


class About extends Component {

      //Setting initial state
      constructor(props){
        super(props);
        this.state = {
             public_repos: 0,
           };

     }

     //Fetching API number of repos in Github account
     componentDidMount() {
       fetch(API)
         .then(response => response.json())
         .then(data => this.setState({ public_repos: data.public_repos }));
     }

      render() { 
          return ( 
            <div className="about">
                <div className="about-text">
                  <p className="about-me">Hi! My name is Stan and I live in Toronto. A few words about me.</p>
                  <p className="about-me">
                  A Web Developer and Front-End Developer with a strong personal portfolio. Well-versed in the Front-End ecosystem and quick to adapt and master new technologies. Recently I've been working on projects using React library for the Front-End, Node.js environment and Express framework on the server side, MongoDB database. Also, I'm using Git as version control. By constantly studying new technologies I improve my technical skills and implement them in the projects. Being a teamwork oriented person I am always glad to learn new stuff as well as share my knowledge with others.
                  </p>
                  <p className="about-me">There are currently {this.state.public_repos} repositories in my Github profile</p>
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