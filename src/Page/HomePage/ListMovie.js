import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListActionService } from "../../Redux/Actions/movieAction";
import "./ListMovie.modul.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import MoveiItem from "../../Components/MoveiItem/MoveiItem";
import { useState } from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SearchMovie from "../../Components/SearchMovie/SearchMovie";

export default function ListMovie() {
  let dispatch = useDispatch();
  let { movieList } = useSelector((state) => {
    return state.movieReducer;
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getMovieListActionService());
  }, []);
  const renderListMovie = () => {
    return movieList
      .filter((item) =>
        item.tenPhim.toLowerCase().includes(search.toLowerCase())
      )
      .filter((item) => item.hinhAnh !== null)
      .map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <NavLink to={`detail/${item.maPhim}`} key={index}>
              <MoveiItem movie={item} />
            </NavLink>
          </SwiperSlide>
        );
      });
  };
  return (
    <div className="container mx-auto my-7 " id="listMovie">
      <div className="search my-10 mx-20 space-x-2 flex items-center md:justify-center sm:justify-center mb:justify-center lg:ustify-center ">
        {/* <SearchMovie /> */}
        <div className="flex items-center p-1 bg-white rounded">
          <input
            className="movie-search py-2 px-5 rounded border-none mr-2 text-black"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm Kiếm..."
          />
          <button className="py-2 px-5 rounded transition ease-in-out delay-15 hover:scale-110 bg-red-600 duration-300 ">
            <AiOutlineSearch className="font-bold text-2xl" />
          </button>
        </div>
      </div>
      {/* <div className="grid mb:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb:mx-10 md:mx-10 lg:mx-20">
     
        {renderListMovie()}
      </div> */}
      <div className="lg:px-20 sm:px-8 mb:px-8">
        <h1 className="text-red-600 text-2xl font-bold pb-5">TẤT CẢ</h1>
        <Swiper
          className="container mx-20 overflow-hidden"
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 4500,
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
