import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { localStorageService } from "../../Services/localStorageService";
import { loginAction } from "../../Redux/Actions/userAction";
import { Link, NavLink } from "react-router-dom";
export default function UserNav() {
  let dispatch = useDispatch();
  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  });

  const renderContent = () => {
    if (userInfo) {
      return (
        <div className="flex items-center space-x-5">
          <Link
            to="manager"
            className="font-bold flex items-center hover:text-red-500 transition duration-300 "
          >
            <BsFillPersonFill className="mr-2" />
            {userInfo.hoTen}
          </Link>
          <button
            onClick={() => {
              localStorageService.user.remove();
              dispatch(loginAction(null));
            }}
            className="px-2 py-2 rounded font-bold flex items-center transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 "
          >
            <MdOutlineLogout className="mr-2 text-xl" /> Đăng Xuất
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex items-center  space-x-5">
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="px-2 py-2 rounded font-bold flex items-center transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 "
          >
            <MdOutlineLogin className="mr-2 text-xl" />
            Đăng Nhập
          </button>
          <NavLink to="/register">
            <button className="px-2 py-2 rounded font-bold flex items-center transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 ">
              <BsFillPersonPlusFill className="mr-2" />
              Đăng Kí
            </button>
          </NavLink>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
