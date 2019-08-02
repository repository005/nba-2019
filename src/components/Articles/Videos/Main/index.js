import React from 'react'
import VideosList from '.././../../widgets/VideosList/videosList.js'

const VideosMain = () => {
  return (
    <div>
      <VideosList 
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={10}
      />
    </div>
  )
}

export default VideosMain
