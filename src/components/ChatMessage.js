import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-lg'>
         <img 
        alt="user" 
        className='h-5'
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-umWad93MGg29rt6KpquK3vSQBFjT1zcXThCCSzQ&s"/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>

    </div>
  )
}

export default ChatMessage