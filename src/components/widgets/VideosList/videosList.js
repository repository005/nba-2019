import React, { Component } from 'react'
import styles from './videoslist.css';
import axios from 'axios';

import { URL } from '../../../config';
import Button from '../Button/Button';

class VideosList extends Component {

  state = {
    teams: this.props.teams,
    videos: this.props.videos,
    start: this.props.start,
    amount: this.props.amount,
    end: this.props.start + this.props.amount
  }

  renderTitle = (title) => {
    return title ?  
    <h3><strong>NBA</strong> Videos</h3> :
    null
  }

  renderButton = () => {
    return this.props.loadmore ? 
      <Button 
        type = "loadmore"
        loadmore = {() => this.loadMore()}
        cta = "Load More Videos"
       /> 
    : 
      <Button type="linkTo" cta="More videos" linkTo="/videos" />
  }

  render() {
    return (
      <div className={styles.videoList_wrapper}>
        { this.renderTitle(this.props.title) }
        { this.renderButton() }
      </div>
    )
  }
}

export default VideosList;
