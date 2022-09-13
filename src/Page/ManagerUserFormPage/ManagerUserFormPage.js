import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, DatePicker, Upload } from "antd";
import "./ManagerUserFormPage.scss";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

function ManagerUserFormPage() {
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-[5rem] h-[5rem] mx-2 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>

          <h1 className="text-black text-center font-black text-[5rem]">
            ADD USER
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
export default ManagerUserFormPage;
