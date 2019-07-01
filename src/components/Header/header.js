import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import styles from './header.css';

const Header = () => {

  const navBars = () => {
    return(
      <div className={styles.bars}>
        <FontAwesome name="bars" style={{color: '#dfdfdf', padding: '10px', cursor: 'pointer'}}/>
      </div>
    )
  } 

  const logo = () => {
    return(
      <Link className={styles.logo}>
        <img src="/images/nba_logo.png" alt="nba-logo"/>
      </Link>
    )
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;