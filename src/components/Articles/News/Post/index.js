import React, { Component } from 'react'
import { firebaseDB, firebaseLooper, firebaseTeams, firebase } from '../../../../firebase';

import styles from '../../articles.css';

import Header from './header';
import { validate } from '@babel/types';

class NewsArticle extends Component {

  state = {
    team: [],
    article: [],
    imageURL: ''
  }

  componentWillMount() {

    firebaseDB.ref(`articles/${this.props.match.params.id}`).once('value')
    .then((snapshot) => {
      let article = snapshot.val();

      firebaseTeams.orderByChild('id').equalTo(article.team).once('value')
      .then((snapshot) => {
        const team = firebaseLooper(snapshot);

        this.setState({
          article,
          team
        })
        this.getImageURL(article.image)
      })
      .catch((e) => {
        console.log(e);
      });
    })
  }

  getImageURL = (filename) => {
    firebase.storage().ref('images')
    .child(filename).getDownloadURL()
    .then(url => {
      this.setState({
        imageURL: url
      })
    })
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;
    
    return(
      <div className={styles.articleWrapper}>
        <Header 
          teamData={team[0]} 
          date={article.date} 
          author={article.author} 
        />
        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div className={styles.articleImage}
            style={{
              background: `url(${this.state.imageURL})`
            }}
          ></div>
          <div className={styles.articleText}
            dangerouslySetInnerHTML={{
              __html: article.body
            }}
          >
          </div>
        </div>
      </div>
    )
  }
}

export default NewsArticle;