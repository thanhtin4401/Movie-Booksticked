import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListActionService } from "../../Redux/Actions/movieAction";
import "./ListMovie.modul.scss"
import {AiFillStar,AiOutlinePlayCircle,AiOutlineSearch} from "react-icons/ai"
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

export default function ListMovie() {
  let dispatch = useDispatch();
  let { movieList } = useSelector((state) => {
    return state.movieReducer;
  });
  useEffect(() => {
    dispatch(getMovieListActionService());
  }, []);
  const renderListMovie = () => {
    console.log(movieList)
    return movieList.filter((item) => { return item.hinhAnh !== null }).map((item, index) => {
      return (
        <NavLink to={`detail/${item.maPhim}`} key={index}>
          <div className="movie-item" >
          <AiOutlinePlayCircle className="movie-play hover:text-white text-white bg-gradient-to-t from-black to-transparent"/>
          <img
              alt="example"
              src={item.hinhAnh}
              style={{ height: "300px", borderRadius:"10px"}}
              className="img-movie object-cover transition duration-300"
            />
          <div className="item-content">
          <h1 className="item-title text-white font-bold text-base">{item.tenPhim.length <20 ? item.tenPhim : item.tenPhim.slice(0,20) + "..."}</h1>
          <h1 className="item-rating text-yellow-500 font-bold text-xs flex items-center">Đánh Giá: {item.danhGia} <AiFillStar/></h1>
          <button className="item-btn py-2 my-3 w-full text-white rounded font-bold transition ease-in-out delay-15  bg-red-600 duration-300 hover:text-white">Mua Vé</button>
          </div>
        </div>
        </NavLink>
      );
    });
  };
  
  return (
    <div className="container mx-auto my-7 ">
      <div className="search mb-5 mx-20 space-x-2 flex items-center justify-end" >
        <input className="movie-search py-2 px-5 rounded border-none  text-black" type="text" />
        <button className="py-2 px-5 rounded transition ease-in-out delay-15 hover:scale-110 bg-red-600 duration-300 "><AiOutlineSearch className="font-bold text-2xl"/></button>
      </div>
      <div className="grid grid-cols-5 gap-5 mx-20">{renderListMovie()}</div>
    </div>
  );
}
