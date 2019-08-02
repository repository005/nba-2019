import React from 'react'

import NewsSlider from './../../../widgets/NewsSlider/slider'
import NewsList from './../../../widgets/NewsList/newsList'

const NewsMain = () => {
  return (
    <div>
      <NewsSlider 
        type="featured"
        settings={{dots:false}}
        start={0}
        amount={3}
      />
      <NewsList 
        type="image_card"
        loadmore={true}
        start={3}
        amount={6}
      />
    </div>
  )
}

export default NewsMain
