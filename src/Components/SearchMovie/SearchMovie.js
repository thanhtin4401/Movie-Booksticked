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
    let data = movieList?.map((movie, index) => ({
      label: movie.tenPhim,
      value: movie.maPhim,
    }));

    return data;
  };
  const handleChangePhim = (values, options) => {
    movieService
      .getInfoShowTimes(values)
      .then((res) => {
        setCumRap(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [cum, setCum] = useState([]);
  useEffect(() => {
    handleRenderCumRap();
  }, [cumRap]);

  const handleRenderCumRap = () => {
    let containData = [];

    cumRap?.forEach((cumRap, i) => {
      cumRap.cumRapChieu?.forEach((cumRapChieu, index) => {
        // console.log("lichCHieu", cumRapChieu);
        let data = {
          label: cumRapChieu.tenCumRap,
          value: cumRapChieu.maCumRap,
        };
        containData.push(data);
      });
    });

    setCum(containData);
  };

  const convertSelectCumRap = () => {
    let cumRap = cum;
    return cumRap;
  };
  const handleChangeCumRap = (values, options) => {
    
    // let lichChieu = cum.find(({ maCumRap }) => maCumRap === "megags-cao-thang");
  };
  const converSelectLichChieu = () => {};
  const handleChangeLichChieu = () => {};
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
        ></Select>
        <button
          className="px-4 py-1 rounded text-white bg-red-600 "
          type="primary"
        >
          Đặt vé nhanh
        </button>
      </Form>
    </div>
  );
}
