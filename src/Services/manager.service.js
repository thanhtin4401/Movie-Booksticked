import { maNhom } from "../utils/utils";
import { https } from "./configURL";

export let managerService = {
  getUserList: (account) => {
    return https.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${maNhom}${
        account ? `&tuKhoa=${account}` : ""
      }`
    );
  },
  deleteUser: (account) => {
    return https.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`);
  },
  addUser: (inforUser) => {
    return https.post("api/QuanLyNguoiDung/DangKy", inforUser);
  },
  updateUser: (inforUser) => {
    return https.post(
      "api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      inforUser
    );
  },
  getDetailUser: (account) => {
    return https.post(
      `api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${account}`
    );
  },
};
