import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {
  static defaultProps = {
    children: 'Salvar',
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string,
  };
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
class App extends Component {
  state = {
    number: 0,
  };

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <Fragment>
        <h1>Título</h1>
        <h2>{this.state.number}</h2>
        <Button onClick={this.handleClick}>Teste</Button>
      </Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));
