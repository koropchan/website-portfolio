import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class NotFound404 extends Component {
      render() { 
          return ( 
            <div>
            Error 404 - <Link to = "/">Go home</Link>
            </div>
           );
      }
  }
   
export default NotFound404;