import { LOGIN, REGISTER } from "../constants/userConstant"


export  let loginAction = (dataLogin) => { 
    return {
        type : LOGIN,
        payload : dataLogin,
    }
 }
