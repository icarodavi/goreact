import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';

import Footer from '../components/Footer';

const Routes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default Routes;
