import axios from 'axios';

export const API = axios.create({
  baseURL: `//api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
    // Set common parameters on each request
    config.params.APPID = '152832f5e49fe25711417faff4b75198';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    return Promise.reject(error);
  });