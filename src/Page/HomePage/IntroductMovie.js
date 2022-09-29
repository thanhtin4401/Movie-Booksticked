import React from "react";
import "./IntroductMovie.modul.scss";
export default function IntroductMovie() {
  return (
    <div className="intro" id="gioiThieu">
      <div className="container mx-auto my-7">
        <div className="flex items-center justify-around lg:flex md:flex-col sm:flex-col mb:flex-col">
          <div className="introLeft w-50 text-center ">
            <h1 className="text-3xl font-bold text-white lg:mt-32">
              Ứng dụng tiện lợi dành cho <br /> người yêu điện ảnh
            </h1>
            <p className="text-base text-white my-5">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, <br /> chấm điểm
              rạp và đổi quà hấp dẫn.
            </p>
            <button className="px-5 py-2 my-3 bg-red-600 rounded font-bold transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300">
              App miễn phí - tải về ngay!
            </button>
          </div>
          <div className="introRight w-50 ">
            <div className=" w-full">
              <img
              className="object-contain"
              style={{height:"400px", width:"100%"}}
                src="https://res.cloudinary.com/dvzingci9/image/upload/v1664007780/My-portfolio/iPhone_12_Pro_Max_1_xilech.png?fbclid=IwAR3shyANOUmzxQ56gj3lFpdTCJSTchfvrA6Y8AYjrs-QwX1hOJcgoYs59QI"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
