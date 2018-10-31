import React, { Component } from 'react';
import About from './about/About';
import Menu from '../menu/Menu';
import '../../styles/index.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Skillset from './skillset/Skillset';


class Pages extends Component {
  render() {
    return (
      <div className="flex-row full-height flex-align-center">
        <div className="flex-item-fixed padding-sm">
          <Menu></Menu>   
        </div>
        <div className="flex-item-balloon padding-sm">
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route path="/skillset/" component={Skillset}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Pages;
