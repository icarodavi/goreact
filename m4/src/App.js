import React from 'react';
import './styles/global';

import Sidebar from './components/sidebar';
import Player from './components/player';

const App = () => (
  <React.Fragment>
    <Sidebar />
    <Player />
  </React.Fragment>
);

export default App;
