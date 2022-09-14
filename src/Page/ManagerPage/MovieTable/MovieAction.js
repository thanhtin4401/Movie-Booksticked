import { ExclamationCircleOutlined } from "@ant-design/icons";
import { message } from "antd";
import { Modal } from "antd";
import React from "react";
import "./MovieAction.scss";
import { Link } from "react-router-dom";
import { managerService } from "../../../Services/manager.service";
import { movieService } from "../../../Services/movie.service";

export default function MovieAction({ movieID, handleOnSuccess }) {
  let handleUserDelete = () => {
    movieService
      .deleteMovie(movieID)
      .then((res) => {
        message.success("Xoá thành công");
        handleOnSuccess();
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
    Modal.destroyAll();
  };

  const confirm = () => {
    Modal.confirm({
      title: "Xác nhận",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc muốn xoá phim này",
      okText: "Xác nhận",
      cancelText: "Huỷ",
      onOk: handleUserDelete,
    });
  };
  return (
    <div className="space-x-5 flex">
      <Link to="Home" className="bg-blue-500 rounded text-white px-5 py-3">
        Update
      </Link>
      <button
        className="bg-red-500 rounded text-white px-5 py-3"
        // onClick={handleUserDelete}
        onClick={confirm}
      >
        Delete
      </button>
    </div>
  );
}
