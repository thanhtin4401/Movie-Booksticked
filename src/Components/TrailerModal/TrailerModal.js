import React from 'react'
import {AiOutlineClose} from "react-icons/ai"
export default function TrailerModal({movie,open,close}) {
  if(!open) return null
  return (
    <div className='fixed top-0 left-0 w-full h-full z-50 bg-black/90'>
      <button className='p-5' onClick={close}><AiOutlineClose className='font-bold text-4xl text-red-600'/></button>
      <div className='flex items-center justify-center'>
      <iframe  style={{width:"70%", height :"500px"}} className='' src={movie.trailer}></iframe>
    </div>
    </div>
  )
}
