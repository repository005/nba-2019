import React from 'react';
import styles from './logo.css';

const Logo = (props) => {
  
  const getLogo = (teams, team) => {
      let data = teams.find((item) => {
        return item.id === team;
      });

      if (data) {
        
        return (
          <img src={`/images/articles/${data.image}`} alt=""/>
        )
      }
  }
  

  return (
    <div className={styles.logo}>
      {getLogo(props.teams, props.team)}
    </div>
  )
}

export default Logo;
