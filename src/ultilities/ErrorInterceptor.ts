import axios from 'axios';

axios.interceptors.response.use((response) => {
  console.log('Response was received');

  return response;
}, error => {
  // handle the response error
  console.error("Http error was intercepted", error);
  return Promise.reject(error);
});
