import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import styles from './newsList.css';
import Button from '../Button/Button';
import CardInfo from '../CardInfo/CardInfo';
import Logo from '../Logo/logo';
import { firebaseTeams, firebaseArticles, firebaseLooper } from '../../../firebase';
 
class NewsList extends Component {

  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount
  }
  

  componentWillMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {

    if (this.state.teams.length < 1) {
      firebaseTeams.once('value')
      .then((snapshot) => {
        const teams = firebaseLooper(snapshot);
        this.setState({
          teams
        })
      });
    }

    firebaseArticles.orderByChild("id").startAt(start).endAt(end).once('value')
    .then((snapshot) => {
      const articles = firebaseLooper(snapshot);
      this.setState({
        items: [...this.state.items, ...articles],
        start,
        end
      })
    })
    .catch((e) => {
      console.log(e);
    });
  }

  loadMore = () => {
    let end = this.state.end + this.state.amount;
    this.request(this.state.end + 1, end);
    this.setState({
      end: end
    })
  }

  renderNews = (type) => {
    let template = null;

    switch(type) {

      case("card"):
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div className={styles.newslist_item}>
              <Link to={`/articles/${item.id}`}>
                <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                <h2>{item.title}</h2>
              </Link>
            </div>
          </CSSTransition>
        ));
        break;
      case("image_card"):
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter
            }}
            timeout={500}
            key={i}
          >
            <div className={styles.newslist_item_wrapper}>
              <Logo teams={this.state.items} team={item.id} date={item.date}/>
              <div className={styles.newslist_item}>
                <Link to={`/articles/${item.id}`}>
                  <div>
                    <CardInfo teams={this.state.teams} team={item.id} date={item.date}/>
                    <h2>{item.title}</h2>
                  </div>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;

      default: 
        template = null;
    }

    return template;
  }
  

  render() {
    
    
    return(
      <div>
        <TransitionGroup
          component="div"
          className="list"
        >
          { this.renderNews(this.props.type) }
        </TransitionGroup>

        <Button 
          type = "loadmore"
          loadmore = {() => this.loadMore()}
          cta = "Load More News"
        />
      </div>
    )
  }
  
}

export default NewsList;