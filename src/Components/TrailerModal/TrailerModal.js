import React from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
export default function TrailerModal({movie,open,close}) {
  if(!open) return null
  return (
    <div className='fixed top-16  z-50 text-left bg-red-400'>
      <button className=' p-5' onClick={close}><AiFillCloseCircle className='font-bold text-2xl text-red-600'/></button>
      <div className='flex items-center justify-center'>
      <iframe width="50%" height="100%" src={movie.trailer}></iframe>
    </div>
    </div>
  )
}
