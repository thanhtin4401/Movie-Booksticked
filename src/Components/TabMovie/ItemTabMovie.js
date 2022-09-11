import moment from 'moment'
import React from 'react'

export default function ItemTabMovie({phim}) {
  return (
    <div className='text-white flex gap-5 p-5'>
        <img src={phim.hinhAnh} className="w-24 h-24 object-cover m-2 rounded" alt="" /> 
        <div>
            <p className='font-bold text-green-500 uppercase text-xl mb-2'>{phim.tenPhim}</p>    
            <div className='grid grid-cols-3 gap-4'>{phim.lstLichChieuTheoPhim.slice(0,9).map((lichChieu,index) => { 
                return <div className='bg-gray-200 text-black rounded font-bold px-2 py-2' key={index}>
                    {moment(lichChieu.ngayChieuGioChieu).format("DD-MM ~")}
                    <span className='text-red-500'> {moment(lichChieu.ngayChieuGioChieu).format("hh:mm'")}</span>
                    </div>
             })}</div>    
        </div>    
    </div>
  )
}
