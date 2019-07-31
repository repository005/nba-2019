import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import Layout from './hoc/Layout/layout';

export default class routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/articles/:id" exact component={NewsArticle}/>
          <Route path="/videos/:id" exact component={VideoArticle}/>
        </Switch>
      </Layout>
    )
  }
}
