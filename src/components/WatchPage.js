import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'


const WatchPage = () => {
  const [searchParams] = useSearchParams()


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  }, [])
  return (
    <div>
      <div className=''>
        <iframe className='m-2 border  border-gray-950'
          height="500"
          width="1000"
          autoPlay
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>


      <CommentContainer />
    </div>
  )
}

export default WatchPage