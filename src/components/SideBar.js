import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul className='border-b-2 pb-5'>
        <li className='hover:bg-blue-50 p-2'><Link to="/">Home</Link></li>
        <li className='hover:bg-blue-50 p-2'>Shorts</li>
        <li className='hover:bg-blue-50 p-2'>Videos</li>
        <li className='hover:bg-blue-50 p-2'>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscribtions</h1>
      <ul className='border-b-2 pb-5'>
        <li className='hover:bg-blue-50 p-2'>Movies</li>
        <li className='hover:bg-blue-50 p-2'>Sports</li>
        <li className='hover:bg-blue-50 p-2'>Gaming</li>
        <li className='hover:bg-blue-50 p-2'>Movie</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul className='border-b-2 pb-5'>
        <li className='hover:bg-blue-50 p-2'>Movies</li>
        <li className='hover:bg-blue-50 p-2'>Sports</li>
        <li className='hover:bg-blue-50 p-2'>Gaming</li>
        <li className='hover:bg-blue-50 p-2'>Movie</li>
      </ul>
    </div>
  )
}

export default SideBar