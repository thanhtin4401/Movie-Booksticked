import { maNhom } from "../utils/utils";
import { https } from "./configURL";

export let movieService = {
  getMovieList: (movieName) => {
    return https.get(
      `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}${
        movieName ? `&tenPhim=${movieName}` : ""
      }`
    );
  },
  getMoiveDetail: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getMovieBanner: () => {
    return https.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  },
  getTheaterInfo: () => {
    return https.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  },
  getClusterTheaterInfo: (theaterID) => {
    return https.get(
      `api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterID}`
    );
  },
  getShowtimeInfoByTheater: () => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${maNhom}`
    );
  },
  addMovie: (dataMovie) => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", dataMovie);
  },
  deleteMovie: (id) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${id}`);
  },
  getInforMovie: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  updateMovie: (formData) => {
    return https.post("api/QuanLyPhim/CapNhatPhimUpload", formData);
  },
  getInfoShowTimes: (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  getListRoomTicket: (id) => {
    return https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
  },
  bookTicket: (ticket) => {
    return https.post(`/api/QuanLyDatVe/DatVe`, ticket);
  },
  createCalendarMovie: (infoCalendar) => {
    return https.post(`/api/QuanLyDatVe/TaoLichChieu`, infoCalendar);
  },
};
