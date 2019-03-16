import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from '../components/Layout';
import { LoginPage } from './LoginPage';
import { ChoosePlayers } from '../components/ChoosePlayers';
import { PrivateRoute } from '../components/PrivateRoute';

export default class App extends Component {
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