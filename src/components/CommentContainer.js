import React from 'react'
import UserImg from "../assets/user-icon.png"

const commentsData = [
  {
    name: "Sarang Salame",
    text: "this is a comment",
    replies: [
      {
        name: "Shivam Salame",
        text: "this is a comment",
        replies: [

        ]
      },
      {
        name: "Himanshu",
        text: "this is a comment",
        replies: [
          {
            name: "Himanshu",
            text: "this is a comment",
            replies: [
              {
                name: "Himanshu",
                text: "this is a comment",
                replies: [

                ]
              }
            ]
          }
        ]
      }
    ]

  },
  {
    name: "Praveen Salame",
    text: "this is a comment",
    replies: [

    ]
  },
  {
    name: "Prashant Salame",
    text: "this is a comment",
    replies: [

    ]
  }
]
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex bg-gray-100 my-2' >
      <img alt="avatar" className='w-8 h-8' src={UserImg} />
      <div>
        <p className='font-bold text-lg'>{name}</p>
        <p className='text-md'>{text}</p>
      </div>
    </div>
  )
}

const CommentList = ({ comments }) => {
  return (
    comments.map((comment, ind) => (
      <div key={ind} >
        <Comment data={comment} />
        <div className='ml-5 px-3 border-l-black'>
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ))
  )
}
const CommentContainer = () => {
  return (
    <div className='m-2 p-2'>
      <h3 className='font-bold text-2xl'>Comment: </h3>
      <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentContainer