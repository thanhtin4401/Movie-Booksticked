import React, { useState } from "react";

import { Form, Input, Button, DatePicker, Switch } from "antd";
import "./AddFilm.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { movieService } from "../../../Services/movie.service";

const { TextArea } = Input;

function AddFilm() {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [imgSRC, setimgSRC] = useState("");
  const [file, setfile] = useState({});
  const onFinish = (e) => {
    let ngayChieu = moment(e.ngayChieu).format("dd / mm / yyyy");
    const infor = { ...e, ngayChieu: ngayChieu, hinhAnh: file };

    const formData = new FormData();
    formData.append("tenPhim", e.tenPhim);
    formData.append("trailer", e.trailer);
    formData.append("moTa", e.moTa);
    formData.append("maNhom", "GP07");
    formData.append("ngayKhoiChieu", ngayChieu);
    formData.append("danhGia", e.danhGia);
    formData.append("hot", e.hot);
    formData.append("dangChieu", e.dangChieu);
    formData.append("sapChieu", e.sapChieu);
    formData.append("hinhAnh", file, file.name);
    // for (let key in e) {
    //   if (key !== "hinhAnh") {
    //     formData.append(key, e[key]);
    //   } else {
    //     formData.append("File", file, file.name);
    //   }
    // }
    // console.log(formData.get("tenphim"));

    movieService
      .addMovie(formData)
      .then((res) => {
        // message.success(res)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(infor);
      });
  };
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setimgSRC(e.target.result);
    };
    setfile(file);
  };
  // const form = useForm();
  // const handleChangeDatePicked = (value) => {
  //   let ngayChieu = moment(value).format("dd / mm / yyyy");
  //   // form.setFileValue

  //   form.setFieldValue("ngayCHieu", ngayChieu);
  // };

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
          initialValues={{
            sapChieu: false,
            tenPhim: "hello",
            ngayChieu: "",
          }}
        >
          <Form.Item
            rules={[{ required: true, message: "Vui lòng nhập tên phim" }]}
            name="tenPhim"
            label="Tên film"
          >
            <Input name="tenPhim" onChange={(e) => e.target.value} />
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
            <DatePicker
              name="ngayChieu"
              format={"DD/MM/YYYY"}
            />
          </Form.Item>
          <Form.Item
            // rules={[{ required: true, message: "Vui lòng nhập giá trị" }]}
            name="sapChieu"
            label="Sắp chiếu"
            valuePropName="checked"
          >
            <Switch name="sapChieu" onChange={(e) => e.target.value} />
          </Form.Item>

          <Form.Item
            // rules={[{ required: true, message: "Vui lòng nhập giá trị" }]}
            name="dangChieu"
            label="Đang chiếu"
            valuePropName="checked"
          >
            <Switch value="false" />
          </Form.Item>
          <Form.Item
            // rules={[{ required: true, message: "Vui lòng nhập giá trị" }]}
            name="hot"
            label="Đang chiếu"
            valuePropName="checked"
          >
            <Switch />
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
            <input type="file" onChange={handleChangeFile} />
            <br></br>
            <img className="w-[150px]" src={imgSRC} alt="" />
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

export default AddFilm;
