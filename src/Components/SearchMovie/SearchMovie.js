import { Button, Form, message, Select } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { movieService } from "../../Services/movie.service";
import "./SearchMovie.modul.scss";

export default function SearchMovie() {
  let { movieList } = useSelector((state) => {
    return state.movieReducer;
  });
  
  let [cumRap, setCumRap] = useState([]);
  let [lichChieu, setLichChieu] = useState([]);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const convertSelectMovie = () => {
    return movieList?.map((movie, index) => ({
      label: movie.tenPhim,
      value: movie.maPhim,
    }));
  };
  const handleChangePhim = (values, options) => {
    movieService
      .getInfoShowTimes(values)
      .then((res) => {
        setCumRap(res.data.content.heThongRapChieu)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const convertSelectCumRap= () => { 
    return cumRap?.map((cumRap,i) => { 
      return cumRap.cumRapChieu.map((cumRapChieu,index) => { 
       console.log(cumRapChieu)
      return {
        label : cumRapChieu.tenCumRap,
        value: cumRapChieu.maCumRap
      }
       })
      // console.log(cumRap);
      // return {
      //   lable : cumRap.tenHeThongRap,
      //   value: cumRap.maHeThongRap
      // }
     })
  }
  const handleChangeCumRap = (values,options) => { 
    console.log(options)
   }
   const converSelectLichChieu = () => { 

  }
  const handleChangeLichChieu = () => { 

   }
  return (
    <div className="p-2 rounded bg-white md:hidden sm:hidden mb:hidden lg:block">
      <Form
      className="flex items-center space-x-2 "
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
          <Select 
          className="bg-black"
            options={convertSelectMovie()}
            onChange={handleChangePhim}
            placeholder="Chọn Phim"
          />
          <Select 
            options={convertSelectCumRap()}
            onChange={handleChangeCumRap}
            placeholder="Chọn Cụm Rạp"
          />

          <Select 
            options={converSelectLichChieu()}
            onChange={handleChangeCumRap}
            placeholder="Chọn Lịch Chiếu"
          >
          </Select>
          <button className="px-4 py-1 rounded text-white bg-red-600 " type="primary">
          Đặt vé nhanh
        </button>
      </Form>
    </div>
  );
}
