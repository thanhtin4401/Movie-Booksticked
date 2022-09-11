import React from 'react'
import UserNav from './UserNav'
import {RiMovie2Fill} from "react-icons/ri"
import { NavLink } from 'react-router-dom'
export default function HeaderTheme() {
  return (
    <div className='h-16 px-10 w-full flex items-center justify-between container mx-auto bg-black'>
       <NavLink to="/"> <div className="flex items-center text-3xl font-bold hover:text-red-600 transition duration-300"> <RiMovie2Fill className='mx-2 text-red-600'/> MOVIE</div></NavLink>
        <div className='space-x-7 font-bold flex '>
                <a className='hover:text-red-500' href="">Cụm Rạp</a>
                <a className='hover:text-red-500' href="">Lịch Chiếu</a>
                <a className='hover:text-red-500' href="">Giới Thiệu</a>
        </div>
        <UserNav/>
    </div>
  )
}
