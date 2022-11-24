import logo from './logo.svg';
import './App.css';
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as React from 'react';
import ListStaffComponent from './components/ListStaffComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStaffComponent from './components/CreateStaffComponent';


function App() {
  return (
    <div>
      <BrowserRouter>
        <div className= "container">
          <HeaderComponent />
        <div className="container">
          <Switch> 
            <Route path = "/" exact component = {ListStaffComponent}></Route>
            <Route path = "/staffs" component = {ListStaffComponent}></Route>
            <Route path = "/addstaff/:id" component = {CreateStaffComponent} />
            {/* <Route path = "/update-staff/:id" component = {CreateStaffComponent} /> */}

          </Switch>
        </div>
          <FooterComponent />
        </div>
     </BrowserRouter>

    </div>
  );
}

export default App;
