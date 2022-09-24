import React, { useState } from "react";
import { Tabs, Input, Space, Button } from "antd";
import UserTable from "./UserTable/UserTable";
import "./manager-page.scss";
import MovieTable from "./MovieTable/MovieTable";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

function ManangerPage() {
  const [searchUser, setsearchUser] = useState(null);
  const onSearchUser = (value) => {
    setsearchUser(value);
  };
  const [searchMovie, setsearchMovie] = useState(null);
  const onSearchMovie = (value) => {
    setsearchMovie(value);
  };
  const navigation = useNavigate();
  return (
    <div className="warrapped bg-white ">
      <div className="container mt-[5rem] bg-white mx-auto  my-7">
        <div className="mx-[40px] bg-white">
          <Tabs className="text-2xl" defaultActiveKey="1">
            <Tabs.TabPane tab="Quản lý người dùng" key="1">
              <div className="function mb-2 flex items-center">
                <Space direction="vertical">
                  <Search
                    placeholder="Tìm tài khoản"
                    onSearch={onSearchUser}
                    enterButton
                  />
                </Space>
                <Button
                  to="/manageruserformpage"
                  className="ml-2"
                  type="primary"
                  onClick={() => {
                    navigation("/manager/adduser");
                  }}
                >
                  + Thêm tài khoản
                </Button>
              </div>

              <UserTable search={searchUser} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Quản lý phim" key="2">
              <div className="function mb-2 flex items-center">
                <Space direction="vertical">
                  <Search
                    placeholder="Tìm phim"
                    onSearch={onSearchMovie}
                    enterButton
                  />
                </Space>
                <Button
                  onClick={() => {
                    navigation("/manager/addmovie");
                  }}
                  className="ml-2"
                  type="primary"
                >
                  + Thêm phim
                </Button>
              </div>

              <MovieTable search={searchMovie} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ManangerPage;
