import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListChair from "./ListChair";
import BookTicketDetail from "./BookTicketDetail";
import { useDispatch, useSelector } from "react-redux";
import { getRoomTicketDetailActionService } from "../../Redux/Actions/roomTicketDetailAction";

export default function BookTicketsPage() {
  let { id } = useParams();

  // let history = useNavigate();
  // if(!localStorage.getItem("USER")){
    //   return history("/login")
    // }
    const {roomTicketDetail} = useSelector(state => state.roomTicketDetailReducer)
    const dispatch = useDispatch();
    useEffect(() => { 
      dispatch(getRoomTicketDetailActionService(id))
     },[])
     const {danhSachGhe,thongTinPhim} = roomTicketDetail;
     console.log("danhSachGhe",danhSachGhe)
     console.log("thongTinPhim",thongTinPhim)
  return <div className="container mx-auto px-10 my-10">
    <h1 className="text-center font-bold text-white text-2xl">Đặt Vé</h1>
    <div className="grid grid-cols-12 my-10">
      <div className="col-span-8 p-5">
        <ListChair roomTicketDetail = {roomTicketDetail}/>
      </div>
      <div className="col-span-4 p-5"> 
          <BookTicketDetail roomTicketDetail = {roomTicketDetail}/>
      </div>
    </div>
  </div>;
}
