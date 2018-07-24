import React from 'react';

export default class Main extends React.Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          <li>
            <p>
              <strong>facebook/react</strong> (A declarative, efficient, and flexible JavaScript
              library for building user interfaces) <a href="#">Acessar</a>
            </p>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
