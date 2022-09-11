import { https } from "./configURL"

export let movieService = {
    getMovieList : () => { 
        return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06")
     },
     getMoiveDetail : (id) =>{
        return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
     },
     getMovieBanner: () =>{
        return https.get(`/api/QuanLyPhim/LayDanhSachBanner`)
     },
     getTheaterInfo : () => { 
        return https.get(`/api/QuanLyRap/LayThongTinHeThongRap`)
      },
      getShowtimeInfoByTheater : () => { 
         return https.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP06`)
       },
      getInfoShowTimes : (id) => { 
         return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
       }

}