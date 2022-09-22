import React, { useEffect, useState } from "react";

import { Form, Button, Cascader, DatePicker, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
const { RangePicker } = DatePicker;
function CalendarMovie() {
  const navigation = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (e) => {
    console.log(e);
  };

  const [cascader, setCascader] = useState({
    theatherSystem: [],
    theatherCluster: [],
  });

  useEffect(() => {}, []);

  const handleChangeTheaterSystem = (values) => {
    console.log(values);
  };
  const onChangeDate = (values) => {
    console.log(values);
  };
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
          <Form.Item label="Rạp">
            <Cascader
              options={[
                { label: "aa", value: "aa" },
                { label: "aaa", value: "aaa" },
              ]}
              onChange={handleChangeTheaterSystem}
              placeholder="Chọn hệ thống rạp"
            />
          </Form.Item>
          <Form.Item label="Chọn cụm rạp">
            <Cascader
              options={[
                { label: "aa", value: "aa" },
                { label: "aaa", value: "aaa" },
              ]}
              onChange={handleChangeTheaterSystem}
              placeholder="Please select"
            />
          </Form.Item>
          <Form.Item label="Ngày chiếu:">
            <DatePicker showTime onChange={onChangeDate} />
          </Form.Item>
          <Form.Item label="Ngày kết thúc:">
            <DatePicker showTime onChange={onChangeDate} />
          </Form.Item>
          <Form.Item label="Giá bán:">
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
