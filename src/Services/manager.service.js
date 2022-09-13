import { https } from "./configURL";

export let managerService = {
  getUserList: (account) => {
    return https.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07${
        account ? `&tuKhoa=${account}` : ""
      }`
    );
  },
  deleteUser: (account) => {
    return https.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`);
  },
};
