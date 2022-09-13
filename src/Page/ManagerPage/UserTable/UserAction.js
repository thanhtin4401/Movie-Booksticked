import { message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { managerService } from "../../../Services/manager.service";

export default function UserAction({ account, handleOnSuccess }) {
  let handleUserDelete = () => {
    managerService
      .deleteUser(account)
      .then((res) => {
        message.success("Xoá thành công");
        handleOnSuccess();
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
  };

  return (
    <div className="space-x-5 flex">
      <Link
        to="manageruserformpage"
        className="bg-blue-500 rounded text-white px-5 py-3"
      >
        Update
      </Link>
      <button
        className="bg-red-500 rounded text-white px-5 py-3"
        onClick={handleUserDelete}
      >
        Delete
      </button>
    </div>
  );
}
