import { message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieService } from "../../Services/movie.service";

export default function BookTicketDetail({ thongTinPhim }) {
  let { id } = useParams();
  const { danhSachGheDangDat } = useSelector(
    (state) => state.bookTicketReducer
  );

  const bookTicketBtn = () => {
    if (danhSachGheDangDat.length > 0) {
      let data = {
        maLichChieu: id,
        danhSachVe: danhSachGheDangDat,
      };
      movieService
        .bookTicket(data)
        .then((res) => {
          message.success(res.data.content);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          message.error(err.reponse.content);
        });
    } else {
      message.error("Vui lòng chọn ghế");
    }
  };

  return (
    <div className="border-white border p-5 shadow-border">
      <div className="ticket-content">
        <h1 className="text-[#e67d23]  text-4xl text-center font-bold mb-5">
          {thongTinPhim?.tenPhim}
        </h1>
        <div className="ticket-detail ">
          <div className="space-y-5 ">
            <h1 className="text-white mt-0 py-4 border-b border-y-white  font-bold flex justify-between text-base">
              Tên Phim:{" "}
              <span className="text-[#e67d23] font-[500] ml-1  text-lg">
                {thongTinPhim?.tenPhim}
              </span>
            </h1>
            <h1 className="text-white mt-0 py-4 border-b border-y-white  flex justify-between font-bold text-base">
              Cụm Rạp:{" "}
              <span className="text-white font-[500] ml-1 text-lg">
                {thongTinPhim?.tenCumRap}
              </span>
            </h1>
            <h1 className="text-white mt-0 py-4 border-b border-y-white  flex justify-between font-bold text-base">
              Địa Chỉ:{" "}
              <span className="text-white font-[500] ml-1 text-lg">
                {thongTinPhim?.diaChi}
              </span>
            </h1>
            <h1 className="text-white mt-0 py-4 border-b border-y-white  flex justify-between font-bold text-base">
              Rạp:{" "}
              <span className="text-white font-[500] ml-1 text-lg">
                {thongTinPhim?.tenRap}
              </span>
            </h1>
            <h1 className="text-white mt-0 py-4 border-b border-y-white  flex justify-between font-bold text-base">
              Ngày Giờ Chiếu:{" "}
              <span className="text-[#e67d23] font-[500] ml-1 text-lg">
                {" "}
                {thongTinPhim?.ngayChieu}
              </span>
            </h1>

            <h1 className="text-white mt-0 py-4 border-b border-y-white  flex min-h-[8rem] justify-between font-bold text-base break-words">
              Chọn ghế:{" "}
              {danhSachGheDangDat.map((item, index) => {
                return (
                  <span key={index} className="text-[#e67d23]  ml-1 text-lg">
                    {item.tenGhe},
                  </span>
                );
              })}
            </h1>
            <h1 className="text-white mt-0 py-4 border-b border-y-white  flex justify-between font-bold text-base">
              Ưu đãi:{" "}
              <span className="text-[#e67d23] font-[500] ml-1 text-lg">
                {" "}
                0%
              </span>
            </h1>
            <h1 className="text-white mt-0 py-4 border-b border-y-white  flex justify-between font-bold text-base">
              Tổng tiền:{" "}
              <span className="text-[#e67d23] font-[800] ml-1 text-lg">
                {" "}
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}{" "}
                VND
              </span>
            </h1>
            <button
              onClick={() => {
                bookTicketBtn();
              }}
              className="px-2 py-2 rounded font-bold bg-red-600 w-full hover:scale-110 transition duration-300"
            >
              Đặt Vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
