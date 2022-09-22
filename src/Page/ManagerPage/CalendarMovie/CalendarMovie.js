import React, { useEffect, useState } from "react";

import { Form, Button, Cascader, DatePicker, InputNumber, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieService } from "../../../Services/movie.service";
import moment from "moment";
import { createCalendarMovie } from "../../../Redux/Actions/movieAction";
const { RangePicker } = DatePicker;
function CalendarMovie() {
  const navigation = useNavigate();
  const [form] = Form.useForm();
  const { movieID } = useParams();
  const onFinish = (e) => {
    const Datapicked = moment(e.ngayChieuGioChieu).format(
      "DD/MM/YYYY hh:mm:ss"
    );
    const createCalender = {
      maPhim: movieID,
      ...e,
      ngayChieuGioChieu: Datapicked,
    };
    dispatch(createCalendarMovie(createCalender));
  };

  const [cascader, setCascader] = useState({
    theatherSystem: [],
    theatherCluster: [],
  });

  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      let res = await movieService.getTheaterInfo();
      setCascader({
        ...cascader,
        theatherSystem: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChangeTheaterSystem = async (values) => {
    try {
      let res = await movieService.getClusterTheaterInfo(values);
      setCascader({
        ...cascader,
        theatherCluster: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onOk = () => {};
  const onChangeDate = (values) => {};
  const onChangeInput = (values) => {
    console.log(values);
  };
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-[40px] pb-10 pt-4">
        <div className="flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            className="mx-2 text-red-600"
            height="5rem"
            width="5rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.985 9.985 0 0 1-3.999 8zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </g>
          </svg>

          <h1 className="text-black text-center font-black text-[5rem]">
            Create Calendar Movie
          </h1>
        </div>

        <Form
          form={form}
          id="myForm"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item name="heThongRap" label="Rạp">
            <Select
              options={cascader.theatherSystem?.map((htr, index) => {
                return { label: htr.tenHeThongRap, value: htr.tenHeThongRap };
              })}
              onChange={handleChangeTheaterSystem}
              placeholder="Chọn hệ thống rạp"
            />
          </Form.Item>
          <Form.Item label="cụm rạp" name="maRap">
            <Select
              options={cascader.theatherCluster?.map((htcr, index) => {
                return { label: htcr.tenCumRap, value: htcr.maCumRap };
              })}
              onChange={handleChangeTheaterSystem}
              placeholder="Chọn cụm rạp"
            />
          </Form.Item>
          <Form.Item name="ngayChieuGioChieu" label="Ngày chiếu:">
            <DatePicker
              format="DD/MM/YYYY hh:mm:ss"
              showTime
              onChange={onChangeDate}
              onOk={onOk}
            />
          </Form.Item>

          <Form.Item label="Giá vé:" name="giaVe">
            <InputNumber
              className="w-full"
              defaultValue={1000}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={onChangeInput}
            />
          </Form.Item>

          <Form.Item label="Chức năng: ">
            <Button className="text-white" htmlType="submit">
              Tạo lịch chiếu
            </Button>
            <Button
              onClick={() => {
                navigation("/manager");
              }}
              className="border ml-2 back-btn bg-white"
              htmlType="submit"
            >
              Trở về
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default CalendarMovie;
