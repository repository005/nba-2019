import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sideNav';
import styles from './header.css';

const Header = (props) => {

  const navBars = () => {
    return(
      <div className={styles.bars}>
        <FontAwesome name="bars" onClick={props.onOpenNav} style={{color: '#dfdfdf', padding: '10px', cursor: 'pointer'}}/>
      </div>
    )
  } 

  const logo = () => {
    return(
      <Link to="/" className={styles.logo}>
        <img src="/images/nba_logo.png" alt="nba-logo"/>
      </Link>
    )
  }

  return (
    <header className={styles.header}>
      <SideNavigation {...props} />
      <div className={styles.headerOpt}>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;