import React, { Component } from 'react';
import mjs from 'moment';
import '../../styles/global';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';
import CompareList from '../../components/CompareList';
import api from '../../services/api';

class Main extends Component {
  state = {
    repositoryInput: '',
    repositories: [],
  };

  handleAddRepository = async (e) => {
    e.preventDefault();
    try {
      const { data: repository } = await api.get(`/repos/${this.state.repositoryInput}`);
      repository.lastCommit = mjs(repository.pushed_at).fromNow();
      this.setState({
        repositoryInput: '',
        repositories: [...this.state.repositories, repository],
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <img src={logo} alt="" />
        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="usuario/repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Ok</button>
        </Form>
        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
export default Main;
