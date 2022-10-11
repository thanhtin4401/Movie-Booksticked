import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListActionService } from "../../Redux/Actions/movieAction";
import { NavLink } from "react-router-dom";
import MoveiItem from "../../Components/MoveiItem/MoveiItem";
import { useState } from "react";
import moment from "moment";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CommingSoonMovie() {
  let dispatch = useDispatch();
  const [comming, setComming] = useState([null]);
  let { movieList } = useSelector((state) => {
    return state.movieReducer;
  });
  useEffect(() => {
    dispatch(getMovieListActionService());
    handleRenderComingMovie();
  }, []);
  useEffect(() => {
    handleRenderComingMovie();
  }, [movieList]);
  const handleRenderComingMovie = () => {
    let movieComming = movieList?.filter((item) => item.sapChieu == true);
    setComming(movieComming[2]);
  };

  const renderComming = () => {
    return (
      <div className="">
        <h1 className="text-yellow-500 text-4xl uppercase  font-bold py-2">
          {comming?.tenPhim}
        </h1>
        <h1 className="text-white mt-5 font-bold">
          <span className="text-yellow-500">Khởi Chiếu: </span>{" "}
          {moment(comming?.ngayKhoiChieu).format("DD-MM-YYYY ")}
        </h1>
        <p className="">
          {comming.moTa?.length < 300
            ? comming.moTa
            : comming.moTa?.slice(0, 300) + "..."}
        </p>
        <NavLink to={`detail/${comming?.maPhim}`}>
          <button className="px-5 py-2 my-3 mr-3 bg-red-600 rounded font-bold transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300">
            Chi Tiết
          </button>
        </NavLink>
      </div>
    );
  };
  const renderImg = () => {
    return (
      <div className="flex justify-center items-center">
        <img
          src={comming?.hinhAnh}
          alt=""
          className="object-cover"
          style={{ width: "400px", height: "300px", borderRadius: "10px" }}
        />
      </div>
    );
  };
  const renderContent = () => {
    if (comming) {
      return (
        <>
          <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 mb:col-span-12 p-7 ">
            <div>{renderComming()}</div>
          </div>
          <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 mb:col-span-12 pb-7 lg:py-7">
            {renderImg()}
          </div>
        </>
      );
    } else {
      return "";
    }
  };
  const renderListMovie = () => {
    return movieList
      .filter((item) => item.sapChieu == true)
      .filter((item) => item.hinhAnh !== null)
      .map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className=""
              onClick={() => {
                setComming(item);
              }}
              key={index}
            >
              <MoveiItem movie={item} />
            </div>
          </SwiperSlide>
        );
      });
  };

  return (
    <div className="container mx-auto my-7 py-10">
      <div className="lg:px-20 sm:px-8 mb:px-8">
        <h1 className="text-red-600 text-2xl font-bold">SẮP KHỞI CHIẾU</h1>
        <div
          className="commingSoon grid grid-cols-12 my-5 bg-blend-multiply"
          style={{
            background: `#151515`,
            borderRadius: "10px",
            backgroundRepeat: "no-repeat",
          }}
        >
          {renderContent()}
        </div>
        <Swiper
          className="container mx-20 overflow-hidden"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          scrollbar={{ draggable: true }}
        >
          {renderListMovie()}
        </Swiper>
      </div>
    </div>
  );
}
