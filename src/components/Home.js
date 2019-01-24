import React, {Component} from 'react';
import '../styles/components/_home.scss';

class Home extends Component {
      render() { 
          return ( 
            <div>
                <p className="text"></p>
                <p className="text"></p>
                <div className="icons">
                <a href = "https://www.linkedin.com/in/stan-koropchan/" target="_blank" rel="noopener noreferrer"><img className="links-icons" src={require('../styles/linkedin-logo.png')} alt="icon" height="45" width="45"/></a>
                <a href = "https://github.com/koropchan/" target="_blank" rel="noopener noreferrer"><img className="links-icons" src={require('../styles/github-logo.png')} alt="icon" height="45" width="45"/></a>
                <a href = "mailto:koropchan.sv@gmail.com" target="_top"><img className="links-icons" src={require('../styles/gmail-logo.png')} alt="icon" height="45" width="45"/></a>
                </div>
            </div>
           );
      }
  }
   
export default Home;