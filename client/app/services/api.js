import axios from 'axios';
import * as UserActions from '../actions/user-actions';

const Api = axios.create();

const server = {
    url: location.hostname,
    port: 3000
};

Api.defaults.baseURL = `${location.protocol}//${server.url}:${server.port}/`;

Api.interceptors.request.use((config) => {
    // Do something before request is sent
    const token = localStorage.getItem('_ling');
    console.log(token);
    if (token) {
      config.headers.authorization = 'Barear ' + JSON.parse(token);
    }
    return config;
  }, (error) => {
    // Do something with request error
    console.log(error);
  });
  // Add a response interceptor
  Api.interceptors.response.use((response) => {
    // Do something with response data
    const token = response.headers.authorization.split(' ')[1];
    if(token) {
      localStorage.setItem('_ling', JSON.stringify(token));
    }
    return response;
  }, (error) => {
    if(error.response.status === 401) {
      localStorage.removeItem('_ling');
      location = '/';
    }
    // Do something with response error
    return Promise.reject(error);
  });
export default Api;
