import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NotFound404 from '../components/NotFound404';
import Home from '../components/Home';
import Projects from '../components/Projects';
import About from '../components/About';



const IndexRouter = () => (
  <BrowserRouter>
   <div>
    <Header/>
    <Switch>
     <Route path = "/" component = {Home} exact = {true}/>
     <Route path = "/projects" component = {Projects}/>
     <Route path = "/about" component = {About}/>
     <Route component = {NotFound404} />
    </Switch>
   </div>
  </BrowserRouter>
);
export default IndexRouter;