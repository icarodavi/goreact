import React, { Component } from 'react';
import Head from './components/Head';
import NavBar from './components/NavBar';

import './styles/global';

class App extends Component {
  state = {
    loading: false,
    repositories: [],
    repositoryInput: '',
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <NavBar />
          <Head />
        </div>
      </div>
    );
  }
}

export default App;
