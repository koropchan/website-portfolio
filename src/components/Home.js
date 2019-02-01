import React, {Component} from 'react';
import '../styles/components/_home.scss';

const API = 'https://api.github.com/users/koropchan';

class Home extends Component {

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
            <div>
                <p className="text">Hi, my name is Stan and I am a Web Developer</p>
                <p className="text">There currently {this.state.public_repos} repositories in my Github profile</p>
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