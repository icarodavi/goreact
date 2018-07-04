import React, { Component } from 'react';
import Head from './components/Head';

class App extends Component {
  state = {
    loading: false,
    repositories: [],
    repositoryInput: ''
  };
  render() {
    return (
      <div className="App">
        <Head />
      </div>
    );
  }
}

export default App;
