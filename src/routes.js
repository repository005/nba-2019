import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './components/Home/home';
import NewsArticle from './components/Articles/News/Post/index';
import VideoArticle from './components/Articles/Videos/Video/index';
import NewsMain from './components/Articles/News/Main/index.js';
import VideosMain from './components/Articles/Videos/Main/index.js';
import Layout from './hoc/Layout/layout';
import Dashboard from './components/Dashboard/dashboard';
import SignIn from './components/SignIn/signIn';

const Routes = (props) => {

  return (
    <Layout user={props.user}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/news" exact component={NewsMain}/>
        <Route path="/videos" exact component={VideosMain}/>
        <Route path="/articles/:id" exact component={NewsArticle}/>
        <Route path="/videos/:id" exact component={VideoArticle}/>
        <Route path="/sign-in" exact component={SignIn}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Switch>
    </Layout>
  )
}

export default Routes