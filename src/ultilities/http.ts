import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000
})

const http = axios.create({
  adapter: cache.adapter
})

http.interceptors.response.use((response) => {
  console.log('Response was received');

  return response;
}, error => {
  // handle the response error
  console.error("Http error was intercepted", error);
  return Promise.reject(error);
});

export default http;
