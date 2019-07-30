import React from 'react'

import TeamNfo from '../../Elements/teamNfo';
import PostDate from '../../Elements/postDate';

const Header = (props) => {

  const teamNfo = (team) => {
    return team ? (
      <TeamNfo team={team} />
    ) : null;
  }

  const postDate = (date, author) => {
      return (
        <PostDate data={{date, author}} />
      )
  }

  return (
    <div>
      {teamNfo(props.teamData)}
      {postDate(props.date, props.author)}
    </div>
  )
}

export default Header
