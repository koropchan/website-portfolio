import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/_home.scss';

class Home extends Component {
      render() { 
          return ( 
            <div>
                <p className="text">Hi, my name is Stan and I am a Web Developer</p>
                <p className="text"></p>
                <div className="icons">
                <Link to = "https://www.linkedin.com/in/stan-koropchan/"><img className="links-icons" src={require('../styles/linkedin-logo.png')} alt="icon" height="45" width="45"/></Link>
                <Link to = "https://github.com/koropchan/"><img className="links-icons" src={require('../styles/github-logo.png')} alt="icon" height="45" width="45"/></Link>
                <Link to = "koropchan.sv@gmail.com"><img className="links-icons" src={require('../styles/gmail-logo.png')} alt="icon" height="53" width="45"/></Link>
                </div>
            </div>
           );
      }
  }
   
export default Home;