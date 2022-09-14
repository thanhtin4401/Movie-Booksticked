import {combineReducers} from "redux"
import { movieReducer } from "./movieReducer"
import { roomTicketDetailReducer } from "./roomTicketDetailReducer"
import { spinnerReducer } from "./spinnerReducer"
import { userReducer } from "./userReducer"

export let rootReducer = combineReducers({
    userReducer,
    movieReducer,
    spinnerReducer,
    roomTicketDetailReducer,
})