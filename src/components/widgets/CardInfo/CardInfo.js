import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './cardinfo.css';

const CardInfo = () => {
  return (
    <div style={styles.cardInfo}>
      <span className={styles.teamName}>
        TeamExample
      </span>
      <span className={styles.date}>
        <FontAwesome name="clock-o"/>
          12/20
      </span>
    </div>
  )
}

export default CardInfo;
