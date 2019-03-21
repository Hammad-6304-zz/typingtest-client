import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import Main from './components/main'
import store from './store';
import {Provider} from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store = {store}>

      <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
