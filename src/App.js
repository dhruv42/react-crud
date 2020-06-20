import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Link
} from 'react-router-dom'

import CreateEmployee from './CreateEmployee';
import EmployeeList from './EmployeeList'
import EditEmployee from './EditEmployee'


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Add Employee</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Employee List</Link>
                </li>
              </ul>
            </div>
          </nav>
  
          <br/>

          <Switch>
            <Route exact path='/' component={EmployeeList}/>
            <Route path='/edit/:id' component={EditEmployee}/>
            <Route exact path='/create' component={CreateEmployee}/>
          </Switch>


        </div>
      </Router>
    </div>
  )
}

export default App;
