import axios from "axios";
import { offLoadingAction, onLoadingAction } from "../Redux/Actions/spinnerAction";
import {store} from "../index"

export const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMSIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzExMDQwMDAwMCIsIm5iZiI6MTY0ODQwMDQwMCwiZXhwIjoxNjc3MjU4MDAwfQ.0byoDjBIIS6877xg7NwEnO16v5HOltI9AatD9OLB0Ys"

export const https = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn',
    headers: {
        TokenCybersoft : TOKEN,
    }
  });   

// Add a request interceptor
https.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch(onLoadingAction())
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
https.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(offLoadingAction())
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(offLoadingAction())
    return Promise.reject(error);
  });