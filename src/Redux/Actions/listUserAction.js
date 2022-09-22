import { GET_INFOR_USER, GET_USER_LIST } from "../constants/managerConstant";
import { managerService } from "../../Services/manager.service";
import { message } from "antd";
export const getUserListActionService = () => {
  return (dispatch) => {
    managerService
      .getUserList()
      .then((res) => {
        dispatch({
          type: GET_USER_LIST,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getUserActionService = (account) => {
  return (dispatch) => {
    managerService
      .getDetailUser(account)
      .then((res) => {
        console.log("data", res.data.content);
        dispatch({
          type: GET_INFOR_USER,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteUserActionService = (id) => {
  return async (dispatch) => {
    try {
      let res = await managerService.deleteUser(id);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};

export const addUserActionService = (infor) => {
  return async (dispatch) => {
    try {
      let res = await managerService.addUser(infor);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};

export const updateUserActionService = (infor) => {
  return async (dispatch) => {
    try {
      let res = await managerService.updateUser(infor);
      message.success(res.data.message);
    } catch (error) {
      message.error(error.response.data.content);
    }
  };
};
