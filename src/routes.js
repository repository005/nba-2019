import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home';

export default class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    )
  }
}
