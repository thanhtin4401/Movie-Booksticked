import { combineReducers } from "redux";
import { bookTicketReducer } from "./bookTicketReducer";
import { movieReducer } from "./movieReducer";
import { roomTicketDetailReducer } from "./roomTicketDetailReducer";
import { spinnerReducer } from "./spinnerReducer";
import { userReducer } from "./userReducer";
import { managerReducer } from "./managerReducer";

export let rootReducer = combineReducers({
  userReducer,
  movieReducer,
  managerReducer,
  spinnerReducer,
  roomTicketDetailReducer,
  bookTicketReducer,
});
