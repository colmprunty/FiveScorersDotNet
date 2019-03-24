import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout } from '../components';
import { LoginPage } from '../LoginPage';
import { ChoosePlayers } from '../components';
import { PrivateRoute } from '../components';

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
  }
  displayName = App.name

  render() {
    return (
      <Layout>
            <PrivateRoute exact path='/' component={ChoosePlayers} />
            <Route path="/login" component={LoginPage} />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 