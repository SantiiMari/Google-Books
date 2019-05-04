import React, {Component} from 'react';


export default class Nav extends Component{
    render(){
        return(
<nav>
    <div className="nav-wrapper">
      
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://www.linkedin.com/in/mary-santibanez-89342210b/">Linkedin</a></li>
        <li><a href="https://github.com/SantiiMari">GitHub</a></li>
        <li><a href="collapsible.html">BookSearch Api</a></li>
      </ul>
    </div>
  </nav>
        )
       }
    };
