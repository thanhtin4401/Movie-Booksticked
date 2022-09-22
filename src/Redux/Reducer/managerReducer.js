import { GET_INFOR_USER, GET_USER_LIST } from "../constants/managerConstant";

const initialState = {
  userList: [],
  userInfor: [],
};

export const managerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LIST: {
      state.userList = payload;
      return { ...state };
    }
    case GET_INFOR_USER: {
      state.userInfor = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
