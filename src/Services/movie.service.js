import { https } from "./configURL";

export let movieService = {
  getMovieList: (movieName) => {
    return https.get(
      `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00${
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
  getShowtimeInfoByTheater: () => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP06`
    );
  },
  postMovie: (dataMovie) => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", dataMovie);
  },
  deleteMovie: (id) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${id}`);
  },
};
