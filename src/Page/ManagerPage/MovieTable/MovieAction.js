import { ExclamationCircleOutlined } from "@ant-design/icons";
import { message } from "antd";
import { Button, Modal, Space } from "antd";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { managerService } from "../../../Services/manager.service";

export default function MovieAction({ account, handleOnSuccess }) {
  let handleUserDelete = () => {
    // managerService
    //   .deleteUser(account)
    //   .then((res) => {
    //     message.success("Xoá thành công");
    //     handleOnSuccess();
    //   })
    //   .catch((err) => {
    //     message.error(err.response.data.content);
    //   });
    // setOpen(true);
  };

  const LocalizedModal = () => {
    const [open, setOpen] = useState(false);

    const showModal = () => {
      setOpen(true);
    };

    const hideModal = () => {
      setOpen(false);
    };

    return (
      <>
        <Button type="primary" onClick={showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          open={open}
          onOk={hideModal}
          onCancel={hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bạn có chắc muốn xoá filmn này</p>
        </Modal>
      </>
    );
  };
  const confirm = () => {
    Modal.confirm({
      title: "Xác nhận",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc muốn xoá phim này",
      okText: "Xác nhận",
      cancelText: "Huỷ",
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
