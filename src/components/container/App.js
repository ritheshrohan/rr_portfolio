import React, { Component } from 'react';
import 'styles/App.css';
import Menu from '../menu/Menu';
import Pages from '../pages/Pages';

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <Pages></Pages>
      </div> 
    );
  }
}

export default App;
