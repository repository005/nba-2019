import React from 'react';
import styles from './sidenav.css';
import { Link, withRouter } from 'react-router-dom';

import {firebase} from '../../../firebase';

import FontAwesome from 'react-fontawesome';

const SideNavItems = (props) => {

  const items = [
    {
      type: styles.option,
      icon: 'home',
      text: 'Home',
      link: '/',
      login: ''
    },
    {
      type: styles.option,
      icon: 'file-text-o',
      text: 'News',
      link: '/news',
      login: ''
    },
    {
      type: styles.option,
      icon: 'play',
      text: 'Videos',
      link: '/videos',
      login: ''
    },
    {
      type: styles.option,
      icon: 'sign-in',
      text: 'Sign in',
      link: '/sign-in',
      login: true
    },
    {
      type: styles.option,
      icon: 'dashboard',
      text: 'Dashboard',
      link: '/dashboard',
      login: false
    },
    {
      type: styles.option,
      icon: 'sign-out',
      text: 'Sign out',
      link: '/sign-out',
      login: false
    }
  ]

  const element = (item, i) => (
    <div key={i} className={item.type}>
      <Link to={item.link}>
        <FontAwesome name={item.icon} />
          {item.text}
      </Link>
    </div>
  )

  const restricted = (item, i) => {
    let template = null;

    if ( props.user === null && item.login ) {
      
      template = element(item,i);
    }

    if ( props.user !== null && !item.login ) {
      if(item.link === '/sign-out') {
        template = (
          <div key={i} 
            className={item.type}
            onClick={() => {
              firebase.auth().signOut()
              .then(() => {
                props.history.push('/');
              })
              .catch((e) => {

              });
            }}
          >
            <Link to={item.link}>
              <FontAwesome name={item.icon} />
                {item.text}
            </Link>
          </div>
        )
      } else {
        template = element(item,i);
      }
    }

    return template;
  }

  const showItems = () => {
    return items.map((item, i) => {
      return item.login !== '' ?
      restricted(item,i)
      :
      element(item,i)
    });
  }

  return (
    <div>
      {showItems()}
    </div>
  );
};

export default withRouter(SideNavItems)