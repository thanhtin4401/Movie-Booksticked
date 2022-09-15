import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ListChair from "./ListChair";
import BookTicketDetail from "./BookTicketDetail";
import { useDispatch, useSelector } from "react-redux";
import { getRoomTicketDetailActionService } from "../../Redux/Actions/roomTicketDetailAction";
import { useState } from "react";

export default function BookTicketsPage() {
  // let history = useNavigate();
  // if(!localStorage.getItem("USER")){
  //     return history("/login")
  //   }

  let { id } = useParams();

    const {roomTicketDetail} = useSelector(state => state.roomTicketDetailReducer)
    const dispatch = useDispatch();
    useEffect(() => { 
      dispatch(getRoomTicketDetailActionService(id))
     },[])
     const {danhSachGhe,thongTinPhim} = roomTicketDetail;
  return <div className="container mx-auto px-10 my-10">
    <h1 className="text-center font-bold text-white text-3xl uppercase">Thông Tin Chi Tiết</h1>
    <div className="grid grid-cols-12 my-5">
      <div className="col-span-7 p-5">
        <ListChair danhSachGhe = {danhSachGhe}/>
      </div>
      <div className="col-span-5 p-5"> 
          <BookTicketDetail thongTinPhim={thongTinPhim}/>
      </div>
    </div>
  </div>;
}
