import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index.js';
import VideosMain from './components/Articles/Videos/Main/index.js';
import Layout from './hoc/Layout/layout';
import SignIn from './components/SignIn/signIn';

export default class routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/news" exact component={NewsMain}/>
          <Route path="/videos" exact component={VideosMain}/>
          <Route path="/articles/:id" exact component={NewsArticle}/>
          <Route path="/videos/:id" exact component={VideoArticle}/>
          <Route path="/sign-in" exact component={SignIn}/>
        </Switch>
      </Layout>
    )
  }
}
