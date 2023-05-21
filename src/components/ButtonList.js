import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const btnArr = ['All', "Gaming", "Song", "Cricket", "Edm"]

  return (
    <div className='flex'>
      {
        btnArr.map((ele, ind) => {
          return <Button key={ind} btn={ele} />
        })
      }
    </div>
  )
}

export default ButtonList