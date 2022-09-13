import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, DatePicker, Upload } from "antd";
import "./ManagerMovieFormPage.scss";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

function ManagerMovieFormPage() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  console.log("componentSize", componentSize);
  const onFinish = (e) => {
    console.log(e);
  };
  const navigation = useNavigate();
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
            ADD FILM
          </h1>
        </div>

        <Form
          id="myForm"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          onValuesChange={onFormLayoutChange}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập tên phim" }]}
            name="tenPhim"
            label="Tên film"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập bí danh" }]}
            name="biDanh"
            label="Bí danh"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập trailer" }]}
            name="trailer"
            label="Trailer"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập mã nhóm" }]}
            name="maNhom"
            label="Mã nhóm"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập đánh gía" }]}
            name="danhGia"
            label="Đánh giá"
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập ngày chiếu" }]}
            name="ngayChieu"
            label="Ngày chiếu"
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập giá trị" }]}
            name="sapChieu"
            label="Sắp chiếu"
          >
            <Select>
              <Select.Option value="true">Đúng</Select.Option>
              <Select.Option value="false">Chưa</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập giá trị" }]}
            name="dangChieu"
            label="Đang chiếu"
          >
            <Select>
              <Select.Option value="true">Đúng</Select.Option>
              <Select.Option value="false">Chưa</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
            name="moTa"
            label="Mô tả"
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập hình ảnh" }]}
            label="Poster"
            valuePropName="hinhAnh"
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
          <Form.Item label="Thêm">
            <Button className="text-white" htmlType="submit">
              Thêm
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

export default ManagerMovieFormPage;
