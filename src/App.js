import './App.css';
import React, { Component } from "react";
import "./App.css";

import Nav from './components/Nav';
import Saved from './pages/Saved';
import Search from './pages/Search';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/" component={Search}/>
    <Route component={NoMatch} />
      <Route exact path="/saved" component={Saved}/>
      
      {/* <InputField></InputField> */}
      </Switch>
      </div>
</Router>
  );
}

export default App;
