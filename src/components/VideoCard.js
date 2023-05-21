import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 shadow-lg w-72 rounded-lg'>
      <img alt='thumbnail' className='rounded-lg' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard