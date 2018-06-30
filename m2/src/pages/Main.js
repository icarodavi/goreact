import React from 'react';
import styled from 'styled-components';

import '../styles/global';

import logo from '../assets/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Form = styled.form`
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
  display: flex;

  input {
    height: 55px;
    flex: 1;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    background: #63f5b8;
    margin-left: 10px;
    border: 0;
    border-radius: 3px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      background: #52d89f;
    }
  }
`;
const Main = () => (
  <Container>
    <img src={logo} alt="" />

    <Form>
      <input type="text" placeholder="usuario/repositorio" />
      <button type="submit">Ok</button>
    </Form>
  </Container>
);

export default Main;
