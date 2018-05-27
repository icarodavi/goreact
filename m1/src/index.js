import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import Button from './Button';

class App extends Component {
  state = {
    counter: 0,
  };
  //montagem//atualização

  static getDerivedStateFromProps(props, state) {
    return null;
  }
  //Montagem
  componentDidMount() { }

  //Atualização
  shouldComponentUpdate(nextProps, nextState) {
    nextProps.initialCounter = nextState.counter;
   return nextState.counter <= 10;
  }

  handleClick = () => {
    this.setState(state => ({ counter: this.state.counter + 1 }));
    this.setState(state => ({ counter: this.state.counter + 1 }));
  }
  render() {
    return(
    <Fragment>
      <h1>Hello</h1>
      <Button onClick={this.handleClick}>Somar</Button>
      <h2>{this.state.counter}</h2>
    </Fragment>
    )
  };
}

render(<App initialCounter={3} />, document.getElementById('app'));
