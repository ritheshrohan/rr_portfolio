import React, { Component } from 'react';
import '../../styles/Menu.css'
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        {/* <img src="../../images/logo.svg" /> */}
        <ul>
            <li><NavLink exact activeClassName="aboutName" to='/'>About</NavLink></li>
            <li><NavLink activeClassName="skillset" to='/skillset/'>Skill-Set</NavLink></li>
            <li><NavLink activeClassName="resume" to='/resume/'>Resumé</NavLink></li>
        </ul> 
      </div>
    );
  }
}

export default Menu;
