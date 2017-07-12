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
    const localData = JSON.parse(localStorage.getItem('Ling'));
    if(localData && localData.token) {
      config.headers.authorization = 'Barear ' + localData.token;
    }
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });
// Add a response interceptor
Api.interceptors.response.use((response) => {
    // Do something with response data
    let token = response.headers.authorization;
    const localData = JSON.parse(localStorage.getItem('Ling'));
    if(token && localData && localData.token) {
      localData.token = token.split(' ')[1];
      localStorage.setItem('Ling', JSON.stringify(localData));
    }
    return response;
  }, (error) => {
    if(error.response.status === 401) {
      localStorage.removeItem('Ling');
      // TODO make it polyudsky
      location = '/';
    }
    // Do something with response error
    return Promise.reject(error);
  });
export default Api;
