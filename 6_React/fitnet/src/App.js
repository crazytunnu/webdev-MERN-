import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
function App() {

  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
