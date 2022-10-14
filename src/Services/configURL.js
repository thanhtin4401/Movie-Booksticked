import axios from "axios";
import {
  offLoadingAction,
  onLoadingAction,
} from "../Redux/Actions/spinnerAction";
import { store } from "../index";
import { localStorageService } from "./localStorageService";

export const TOKEN = process.env.REACT_APP_API_TOKEN;
export const https = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    TokenCybersoft: TOKEN,
    Authorization: "Bearer " + localStorageService.user.get()?.accessToken,
  },
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(onLoadingAction());
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    store.dispatch(offLoadingAction());
    return response;
  },
  function (error) {
    store.dispatch(offLoadingAction());
    return Promise.reject(error);
  }
);
