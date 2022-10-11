import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { movieService } from "../../Services/movie.service";
import { Tabs } from "antd";
import moment from "moment";
import { NavLink } from "react-router-dom";
import "./TicketModal.modul.scss";
const { TabPane } = Tabs;

export default function TicketModal({ open, close, id }) {
  const onChange = (key) => {};
  const [theater, setTheater] = useState([]);
  useEffect(() => {
    movieService
      .getInfoShowTimes(id)
      .then((res) => {
        setTheater(res.data.content.heThongRapChieu);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!open) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/90 ">
      <div className="h-screen flex items-center justify-center ">
        <div className="mb:p-0 sm:p-0 mb:h-screen sm:h-screen mb:w-screen sm:w-screen lg:p-8 bg-gray-800 lg:h-[500px] lg:w-[600px] lg:rounded-xl">
          <div className="flex justify-end mt-4 mb-3">
            <button className="" onClick={close}>
              <AiOutlineClose className="font-bold text-4xl transition duration-300 text-red-600 hover:rotate-180" />
            </button>
          </div>
          <div className="">
            <Tabs
              className="tab pr-5 sm:h-[80vh] mb:h-[80vh] lg:h-[350px]"
              tabPosition="left"
              defaultActiveKey="1"
              onChange={onChange}
              style={{ overflowY: "scroll" }}
            >
              {theater.map((heThongRap, index) => {
                return (
                  <TabPane
                    key={index}
                    tab={<img src={heThongRap.logo} className="w-12" />}
                  >
                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <div key={index} className="">
                          <div className=" p-2 ">
                            <p className="text-green-600 font-bold text-base">
                              {cumRap.tenCumRap}
                            </p>
                            <p className="text-white  text-sm">
                              {cumRap.diaChi}
                            </p>
                          </div>
                          <div className="flex flex-wrap">
                            {cumRap.lichChieuPhim
                              .slice(0, 12)
                              .map((lichChieu, index) => {
                                return (
                                  <NavLink
                                    to={`/booktickets/${lichChieu.maLichChieu}`}
                                    key={lichChieu.maLichChieu}
                                    className="mb:w-full sm:w-full lg:w-[6rem] text-center "
                                  >
                                    <div className="m-1">
                                      <p className="bg-gray-200  text-black rounded font-bold px-2 py-2">
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm / ")}
                                        <span className="text-red-500">
                                          {" "}
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("DD-MM")}
                                        </span>
                                      </p>
                                    </div>
                                  </NavLink>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </TabPane>
                );
              })}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
