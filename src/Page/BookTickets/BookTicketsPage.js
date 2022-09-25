import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListChair from "./ListChair";
import BookTicketDetail from "./BookTicketDetail";
import { useDispatch, useSelector } from "react-redux";
import { getRoomTicketDetailActionService } from "../../Redux/Actions/roomTicketDetailAction";
import "./BookTicketsPage.scss";
export default function BookTicketsPage() {
  let { id } = useParams();

  const { roomTicketDetail } = useSelector(
    (state) => state.roomTicketDetailReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getRoomTicketDetailActionService(id));
  }, []);

  const { danhSachGhe, thongTinPhim } = roomTicketDetail;
  let history = useNavigate();
  if (!localStorage.getItem("USER")) {
    message.error("Vui lòng đăng nhập để đặt vé");
    return setTimeout(() => {
      history("/login");
    }, 2000);
  }
  return (
    <div className="page">
      <div className="container mx-auto px-10 py-[10rem]">
        <h1 className="text-center font-bold text-white text-[40px] uppercase">
          Thông Tin Chi Tiết
        </h1>
        <div className="grid grid-cols-12 my-5">
          <div className="mb:overflow-scroll book-chair perpet mb:col-span-12 sm:col-span-12 lg:col-span-7 p-5 ">
            <div className="mb:w-[40rem] relative mb-10 w-full text-black text-2xl display h-[4rem] rounded flex justify-center items-center">
              Màn Hình Chiếu
            </div>
            {/* <div className="mb:w-[40rem] mb-8 trapezium relative w-full h-8mb-12"></div> */}
            <div className="mb:w-[40rem] flex justify-center">
              <ListChair danhSachGhe={danhSachGhe} />
            </div>

            <div className="mb:w-[40rem] mt-5 flex w-full justify-center flex-wrap">
              <h1 className="text-white flex items-center font-bold">
                <button className="ghe "></button> : Ghế Chưa Đặt{" "}
              </h1>
              <h1 className="text-white flex items-center font-bold">
                <button className="ghe gheDaDat"></button> : Ghế đã đặt{" "}
              </h1>
              <h1 className="text-white flex items-center font-bold">
                <button className="ghe gheDangDat"></button> : Ghế đang được
                chọn{" "}
              </h1>
              <h1 className="text-white flex items-center font-bold">
                <button className="ghe gheDuocMinhDat"></button> : Ghế bạn đã
                đặt{" "}
              </h1>
              <h1 className="text-white flex items-center font-bold">
                <button className="ghe gheVip"></button> : Ghế Vip{" "}
              </h1>
            </div>
          </div>
          <div className="mb:col-span-12  sm:col-span-12 lg:col-span-5 lg:p-5">
            <BookTicketDetail thongTinPhim={thongTinPhim} />
          </div>
        </div>
      </div>
    </div>
  );
}
