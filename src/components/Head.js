import React, { useEffect, useState } from 'react'
import Ham from '../assets/ham.png'
import YoutubeLogo from "../assets/youtube-logo.png"
import UserIcon from '../assets/user-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [sugessions, setSugession] = useState([])
  const [sugessionBox, setSuggessionBox] = useState(false)
  const searchCache = useSelector((store) => store.search)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      // checking if the searchQuery value is present in out redux store or not if yes then direct setting the value of setSugession from there else make an api call 

      if (searchCache[searchQuery]) {
        setSugession(searchCache[searchQuery])
      } else {
        getSugessionData()
      }
    }, 200)

    return () => clearTimeout(timer)

  }, [searchQuery])


  const getSugessionData = async () => {
    let data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery)
    
    let json = await data.json()
    setSugession(json[1])

    //update the store
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='grid grid-flow-col m-2  p-5 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          alt="ham"
          src={Ham}
          className='h-8 w-8 cursor-pointer hover:bg-gray-200 rounded-full'
          onClick={() => toggleMenuHandler()}
        />
        <img alt="logo" src={YoutubeLogo} className='h-8 mx-2' />
      </div>

      <div className='col-span-10 '>
        <input type="text"
          value={searchQuery}
          placeholder='Search'
          onFocus={() => setSuggessionBox(true)}
          onBlur={() => setSuggessionBox(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-1/2 border border-gray-400 py-2 px-4 rounded-l-full'
        />

        <button
          className='border border-gray-400 py-2  rounded-r-full w-20 bg-gray-100 hover:bg-gray-200'
        >
          Search
        </button>
      </div>



      {
        // this box will only apper when there is some thing in the suggestion array
        sugessionBox && sugessions.length > 0 &&
        <ul
          className='absolute left-[300px] top-[80px] w-[500px] bg-gray-50 p-2 rounded-lg shadow-lg border border-gray-100'>
          {
            sugessions.map(s => <li key={s}
              onMouseDown={(e) => setSearchQuery(e.target.innerHTML)}
              className='p-1 my-1 hover:bg-gray-100'>
              {s}
            </li>)
          }
        </ul>
      }



      <div className='col-span-1'>
        <img src={UserIcon} alt="user-icon" className='h-8 w-8' />
      </div>
    </div>
  )
}

export default Head
