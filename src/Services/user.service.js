
import axios from "axios"
import {https, TOKEN} from "./configURL"
export let userService = {
    postLogin : (loginData) => { 
       return https.post("/api/QuanLyNguoiDung/DangNhap",loginData)
    },
    postRegister : (registerData) => {
        return https.post("/api/QuanLyNguoiDung/DangKy",registerData)
    }
}