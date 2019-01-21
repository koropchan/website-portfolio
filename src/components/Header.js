import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import '../styles/components/_Header.scss';

class Header extends Component {

    render() {
        return (
               <div className="header">
                  <Link to = "/" className="logo"><img src={require('../styles/logo-sk2.png')} alt="logo" height="50" width="55"/></Link>
                  <ul className="menu_list">
                      <NavLink to = "/" className="not-active" activeClassName="is-active" exact = {true}>Home</NavLink>
                      <NavLink to = "/projects" className="not-active" activeClassName="is-active">Projects</NavLink>
                      <NavLink to = "/about" className="not-active" activeClassName="is-active">About</NavLink>
                  </ul>
               </div>
        )
    }
}

export default Header;