import React from 'react';

import { Container, Search, User } from './styles';

export default () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img src="https://avatars2.githubusercontent.com/u/26661940?v=4" alt="User" />
      Icaro Monteiro
    </User>
  </Container>
);
