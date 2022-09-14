import React from "react";
import { useSelector } from "react-redux";

export default function BookTicketDetail({ thongTinPhim }) {
  const {danhSachGheDangDat} = useSelector(state => state.bookTicketReducer)
  console.log(danhSachGheDangDat)
  return (
    <div className="p-5">
      <div className="ticket-content">
        <h1 className="text-green-700 text-4xl text-center font-bold mb-5">
          {danhSachGheDangDat.reduce((tongTien,ghe,index) => { 
            return tongTien += ghe.giaVe 
           },0).toLocaleString()} <span className="">VND</span>
        </h1>
        <div className="ticket-detail ">
          <div className="space-y-5 ">
          <h1 className="text-white font-bold text-base">
              Tên Phim:{" "}
              <span className="text-green-700 ml-1 text-lg">
                {thongTinPhim?.tenPhim}
              </span>
            </h1>
            <h1 className="text-white font-bold text-base">
              Cụm Rạp:{" "}
              <span className="text-green-700 ml-1 text-lg">
                {thongTinPhim?.tenCumRap}
              </span>
            </h1>
            <h1 className="text-white font-bold text-base">
              Địa Chỉ:{" "}
              <span className="text-green-700 ml-1 text-lg">
                {thongTinPhim?.diaChi}
              </span>
            </h1>
            <h1 className="text-white font-bold text-base">
              Rạp:{" "}
              <span className="text-green-700 ml-1 text-lg">
                {thongTinPhim?.tenRap}
              </span>
            </h1>
            <h1 className="text-white font-bold text-base">
              Ngày Giờ Chiếu:{" "}
              <span className="text-green-700 ml-1 text-lg">
                {" "}
                {thongTinPhim?.ngayChieu}
              </span>
            </h1>
            
            <h1 className="text-white font-bold text-base break-words">
              Chọn ghế: {danhSachGheDangDat.map((item,index) => { 
                return  <span key={index} className="text-green-700 ml-1 text-lg">{item.tenGhe},</span>
               })}
            </h1>
            <button className="px-2 py-2 rounded font-bold bg-red-600 w-full hover:scale-110 transition duration-300">
              Đặt Vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
