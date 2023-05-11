import axios from "axios";

const token = localStorage.getItem("token");

const api = axios.create({
  //baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: "https://apingweb.com/api/",
  headers: { Authorization: `Bearer ${token}` },
});

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //401
    if (response.status === 401) {
      console.log("s");
    }
    //403
    if (response.status === 400) {
      console.log("s");
    }
    //500
    if (response.status === 500) {
      //show 500 error screen
      console.log("s");
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
