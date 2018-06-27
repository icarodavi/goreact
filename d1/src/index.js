import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import Head from './components/head';
import Posts from './components/post';
import './styles/styles.scss';
class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <section id="post">
          <Posts />
          <Posts />
          <Posts />
        </section>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
