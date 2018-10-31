import React, { Component } from 'react';
import 'styles/App.css';
import '../../styles/index.css';

import Pages from '../pages/Pages';
import {Route, BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="absolute-pos body-margin">
        <BrowserRouter>
            <Pages></Pages>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
