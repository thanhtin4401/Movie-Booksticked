import { GET_USER_LIST } from "../constants/managerConstant";
import { managerService } from "../../Services/manager.service";

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
