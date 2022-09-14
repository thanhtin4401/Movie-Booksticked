import React, { Fragment } from "react";
import "./ListChair.modul.scss";
import { useDispatch, useSelector } from "react-redux";
import { DAT_VE } from "../../Redux/constants/bookTicketConstant";
export default function ListChair({ danhSachGhe }) {
  const dispatch = useDispatch()
  const {danhSachGheDangDat} = useSelector(state => state.bookTicketReducer)
  const renderChair = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDD = ""
      let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
      if(indexGheDD != -1){
        classGheDD = "gheDangDat"
      }

      return (
        <Fragment>
          <button
            onClick={() => { 
              dispatch({
                type:DAT_VE,
                gheDuocChon : ghe,
              })
             }}
            disabled={ghe.daDat}
            key={index}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDD}`}
          >
            {ghe.daDat ? <span className="font-bold">X</span> : ghe.stt}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  return <div>{renderChair()}</div>;
}
